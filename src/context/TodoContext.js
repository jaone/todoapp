import React, { useReducer, createContext } from "react";
import { todoReducer } from "@/reducer/TodoReducer";

const todoState = {
  todoList: [],
};
export const TodoContext = createContext(todoState);

const TodoContextProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, todoState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div>{ props.children }</div>
    </TodoContext.Provider>
  );
};

export default TodoContextProvider