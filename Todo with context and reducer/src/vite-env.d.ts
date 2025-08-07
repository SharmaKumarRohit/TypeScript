/// <reference types="vite/client" />

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: { newTodo: Todo } }
  | { type: "TOGGLE_TODO"; payload: { id: string } }
  | { type: "DELETE_TODO"; payload: { id: string } }
  | { type: "EDIT_TODO"; payload: { id: string; title: string } };

interface TodoContextType {
  todos: Todo[];
  addNewTodo: (newTodo: Todo) => void;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
  handleEditTodo: (id: string, title: string) => void;
}
