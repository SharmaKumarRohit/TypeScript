import Todo from "./Todo";
import { useTodo } from "../context/TodosProvider";

function Todos() {
  const { todos } = useTodo();
  if (todos.length === 0)
    return (
      <h3 className="text-xl font-medium text-center my-4">
        Don't have any task
      </h3>
    );
  return (
    <>
      {todos.map((todo) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </>
  );
}

export default Todos;
