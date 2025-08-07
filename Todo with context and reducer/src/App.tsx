import TodoList from "./components/TodoList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 900 }}
      />
      <div className="min-h-screen bg-gray-100">
        <TodoList />
      </div>
    </>
  );
}

export default App;
