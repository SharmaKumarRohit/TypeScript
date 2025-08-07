import { useState } from "react";
import { useTodo } from "../context/TodosProvider";
import { toast } from "react-hot-toast";

function TodoForm() {
  const [title, setTitle] = useState<string>("");
  const { addNewTodo } = useTodo();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title.trim().length === 0) return toast.error("Type something");
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    addNewTodo(newTodo);
    setTitle("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-black rounded-md p-4 flex"
    >
      <input
        type="text"
        placeholder="Write today's task"
        className="flex-1/2 outline-none font-medium sm:text-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="submit"
        value="Add"
        className="uppercase font-medium text-sx cursor-pointer"
      />
    </form>
  );
}

export default TodoForm;
