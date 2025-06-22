import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import { saveTodos, getTodos } from "./utils/features";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
  const [title, setTitle] = useState<TodoItemType["title"]>("");
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);
  const handleDelete = (id: TodoItemType["id"]): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const handleIsCompleted = (id: TodoItemType["id"]): void => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const handleEdit = (
    id: TodoItemType["id"],
    title: TodoItemType["title"]
  ): void => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };
  const addNewTodo = (): void => {
    const newTodo: TodoItemType = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };
  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"74%"} direction={"column"} spacing={"1rem"} p={"1rem 0"}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleIsCompleted={handleIsCompleted}
            handleEdit={handleEdit}
          />
        ))}
      </Stack>
      <TextField
        fullWidth
        label={"New Task"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") addNewTodo();
        }}
      ></TextField>
      <Button
        sx={{ margin: "1rem 0" }}
        fullWidth
        variant="contained"
        onClick={addNewTodo}
        disabled={title === ""}
      >
        ADD
      </Button>
    </Container>
  );
}

export default App;
