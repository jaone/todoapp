import React, { memo, useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";

function EditInput(props) {
  const {
    classes,
    setTodo,
    triggerAction,
    placeHolderText,
    id,
    value
  } = props;

  const [localState, setLocalState] = useState(value)

  const saveAction = () => {
    triggerAction(id, localState)
    setTodo(localState)
    setLocalState("")
  }

  return (
    <>
      <InputBase
        className={classes.input}
        placeholder={placeHolderText}
        onChange={(e) => setLocalState(e.target.value)}
        value={localState}
      />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          onClick={() => localState && saveAction()}
          className={`${classes.iconButton} ${classes.error && !localState}`}
        >
        <SaveIcon />
      </IconButton>
    </>
  );
}

export default memo(EditInput);
