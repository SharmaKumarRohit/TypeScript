import React, { createContext, useContext, useEffect, useReducer } from "react";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "ADD_TODO":
      return [...state, action.payload.newTodo];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
  }
}

const initialState = (): Todo[] => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    try {
      const parsed = JSON.parse(todos);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed as Todo[];
      }
    } catch (error) {
      console.log("Failed to parse todos from localStorage:", error);
    }
  }
  return [
    { id: "1", title: "Play Cricket", completed: false },
    { id: "2", title: "Play Badminton", completed: true },
    { id: "3", title: "Play Chess", completed: false },
  ];
};
function TodosProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, initialState());
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (newTodo: Todo) => {
    dispatch({ type: "ADD_TODO", payload: { newTodo } });
  };
  const handleToggle = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };
  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };
  const handleEditTodo = (id: string, title: string) => {
    dispatch({ type: "EDIT_TODO", payload: { id, title } });
  };
  return (
    <TodoContext.Provider
      value={{ todos, addNewTodo, handleToggle, handleDelete, handleEditTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodosProvider");
  }
  return context;
}

export default TodosProvider;
