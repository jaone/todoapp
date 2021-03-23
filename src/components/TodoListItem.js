import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";

function TodoListItem(props) {
  const { classes, todo, editFunc, removeFunc, changeCheckFunc } = props;
  return (
    <ListItem key={todo.id}>
      <ListItemIcon>
        <IconButton
          edge="start"
          className={`${classes.checkIcon} ${
            todo.isCheck 
              ? classes.checkStatusTrue 
              : classes.checkStatusDefault
          }`}
          onClick={() => changeCheckFunc(todo.id)}
        >
          {todo.isCheck ? <CheckCircleRoundedIcon /> : <CheckCircleOutlineRoundedIcon />}
        </IconButton>
      </ListItemIcon>
      <Divider className={classes.divider} orientation="vertical" />
      <ListItemText className={classes.title + +classes.demo}>
        {todo.text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => editFunc(todo.id)}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" onClick={() => removeFunc(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoListItem;
