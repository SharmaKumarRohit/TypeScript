import {
  Checkbox,
  Paper,
  Typography,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  handleDelete: (id: TodoItemType["id"]) => void;
  handleIsCompleted: (id: TodoItemType["id"]) => void;
  handleEdit: (id: TodoItemType["id"], title: TodoItemType["title"]) => void;
};

function TodoItem({
  todo,
  handleDelete,
  handleIsCompleted,
  handleEdit,
}: PropsType) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.title);
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"0.2rem"}>
          {isActive ? null : (
            <Checkbox
              checked={todo.isCompleted}
              onChange={() => handleIsCompleted(todo.id)}
            />
          )}
          {isActive ? (
            <TextField
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && editText !== "") {
                  handleEdit(todo.id, editText);
                  setIsActive(false);
                }
              }}
            />
          ) : (
            <Typography
              sx={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.title}
            </Typography>
          )}
        </Stack>
        <Stack direction={"row"}>
          {todo.isCompleted ? null : (
            <Button
              sx={{ fontWeight: "600" }}
              onClick={() => setIsActive(true)}
            >
              {isActive ? "Press Enter" : "Edit"}
            </Button>
          )}
          {isActive ? null : (
            <Button
              sx={{ opacity: "0.8" }}
              onClick={() => handleDelete(todo.id)}
            >
              <Delete />
            </Button>
          )}
        </Stack>
      </Stack>
    </Paper>
  );
}

export default TodoItem;
