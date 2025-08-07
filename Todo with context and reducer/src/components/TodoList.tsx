import TodoForm from "./TodoForm";
import Todos from "./Todos";
import TodosProvider from "../context/TodosProvider";
import { randomMessageGenerator } from "../utils/randomMessage";

function TodoList() {
  return (
    <TodosProvider>
      <div className=" max-w-[900px] m-auto p-px w-[90%]">
        <h1 className="text-lg sm:text-2xl font-medium text-center my-6">
          {randomMessageGenerator()}
        </h1>
        <TodoForm />
        <Todos />
      </div>
    </TodosProvider>
  );
}

export default TodoList;
