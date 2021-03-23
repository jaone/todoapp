import React, { useContext, useState, memo } from "react";
import EditInput from "@/components/EditInput";
import { TodoContext } from "@/context/TodoContext";
import { Action } from "@/reducer/TodoReducer";
import { v4 as uuidv4 } from "uuid";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: "10px 0px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: "16px",
    flex: 1,
    marginTop: "9px",
    marginBottom: "7px",
  },
  iconButton: {
    padding: 10,
  },
  error: {
    color: "#f44336"
  },
  divider: {
    height: 28,
    margin: 4,
  },
  wrapper: {
    display: "flex",
    alignItems: "center"
  }
}));

const AddUpdateTodo = (props) => {
  const { type, id: gId, text: gtext } = props;
  const { dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const classes = useStyles();

  const typeVars =
    type === "add"
      ? {
          actionType: "ADD",
          placeHolderText: "Add",
        }
      : {
          actionType: "UPDATE",
          placeHolderText: "Update",
        };

  const triggerAction = (tId, tValue) => {
    dispatch({
      type: Action[typeVars["actionType"]],
      todo: {
        text: tValue,
        id: !tId ? uuidv4() : tId,
        isEdited: false,
        isCheck: false,
      },
    });
    type === "add" && setTodo(""); 
  }

  const editInputProps = {
    classes,
    setTodo,
    triggerAction,
    placeHolderText: `${typeVars["placeHolderText"]} Todo`,
    id: gId,
    value: gtext ? gtext : todo,
    type,
  };

  return type === "add" ? (
    <Paper className={classes.root}>
      <EditInput {...editInputProps} />
    </Paper>
  ) : (
    <div className={classes.wrapper}>
      <EditInput {...editInputProps} />
    </div>
  );
};

export default memo(AddUpdateTodo);
