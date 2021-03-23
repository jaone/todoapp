import React, { useContext } from "react";

import AddUpdateTodo from "@/components/AddUpdateTodo";
import TodoListItem from "@/components/TodoListItem";
import { TodoContext } from "@/context/TodoContext";
import { Action } from "@/reducer/TodoReducer";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "20px",
  },
  demo: {
    backgroundColor: "#002884",
  },
  title: {
    margin: 10,
  },
  divider: {
    height: 28,
    margin: 4,
    position: "absolute",
    left: "50px",
  },
  checkIcon: {
    top: "50%",
    left: "17px",
    position: "absolute",
    transform: "translateY(-50%)",
  },
  checkStatusTrue: {
    color: "#357a38",
  },
  checkStatusDefault: {
    color: "#616161",
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(TodoContext);
  const { todoList } = state;

  const handleEditClick = (id) => {
    dispatch({
      type: Action.EDIT,
      id,
    });
  };

  const handleRemoveClick = (id) => {
    dispatch({
      type: Action.REMOVE,
      id,
    });
  };

  const handleCheckStatusChange = (id) => {
    dispatch({
      type: Action.CHECK,
      id,
    });
  };

  return (
    todoList?.length > 0 && (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <Paper>
            <List>
              {todoList.map((todo, index) => (
                <>
                  {!todo.isEdited ? (
                    <TodoListItem
                      classes={classes}
                      todo={todo}
                      editFunc={handleEditClick}
                      removeFunc={handleRemoveClick}
                      changeCheckFunc={handleCheckStatusChange}
                    />
                  ) : (
                    <AddUpdateTodo type="update" {...todo} />
                  )}

                  {todoList?.length - 1 !== index && <Divider component="li" />}
                </>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  );
};

export default TodoList;
