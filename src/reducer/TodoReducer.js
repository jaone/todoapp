export const Action = {
  ADD: "add",
  REMOVE: "remove",
  EDIT: "edit",
  UPDATE: "update",
  CHECK: "check",
};

export const todoReducer = (state, action) => {

  let _state = { ...state }

  switch (action.type) {

    case Action.ADD: {
      _state.todoList = [..._state.todoList, action.todo] 
      break;
    }
    case Action.REMOVE: {
      _state.todoList = _state.todoList.filter((t) => t.id !== action.id)
      break;
    }
    case Action.EDIT: {
      _state.todoList.forEach(t => {
        t.id === action.id && (t.isEdited = true)
        return t;
      })
      break;
    }
    case Action.UPDATE: {
      _state.todoList = _state.todoList.map(t => t.id === action.todo?.id ? action.todo : t)
      break;
    }
    case Action.CHECK: {
      _state.todoList.forEach(t => {
        t.id === action.id && (t.isCheck = !t.isCheck)
        return t;
      })
      break;
    }

    default:
      break;
  }

  return _state;
};