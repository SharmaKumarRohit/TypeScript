import { useTodo } from "../context/TodosProvider";
import { capitalizedFirstLetter } from "../utils/capitalizedFirstLetter";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

function Todo({ id, title, completed }: Todo) {
  const { handleToggle, handleDelete, handleEditTodo } = useTodo();
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (editId === id && inputRef.current) inputRef.current.focus();
  }, [editId, id]);
  function handleEdit() {
    setEditId(id);
    setEditTitle(title);
  }
  function handleSave() {
    if (editTitle.length === 0) return toast.error("Type something!");
    if (editId) handleEditTodo(editId, editTitle);
    toast.success("Changes saved");
    setEditId(null);
    setEditTitle("");
  }
  return (
    <div className="flex items-center border-2 p-3 sm:p-4 my-4 rounded-md">
      {editId && editId === id ? (
        <>
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Edit your task"
              className="sm:text-lg pl-2 flex-1/2 min-w-0"
              ref={inputRef}
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <div className="flex">
              <button
                onClick={handleSave}
                className="border-2 border-black px-1 sm:px-2 py-1 rounded-md uppercase text-xs font-medium mx-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="border-2 border-black px-1 sm:px-2 py-1 rounded-md uppercase text-xs font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2 flex-1/2">
            <input
              type="checkbox"
              className="sm:size-4"
              checked={completed}
              onChange={() => handleToggle(id)}
            />
            <p
              style={{ textDecoration: completed ? "line-through" : "none" }}
              className="sm:text-lg"
            >
              {capitalizedFirstLetter(title)}
            </p>
          </div>
          <div>
            {completed ? null : (
              <>
                <button
                  onClick={handleEdit}
                  className="border-2 border-black px-1 sm:px-2 py-1 rounded-md uppercase text-xs font-medium"
                >
                  Edit
                </button>
              </>
            )}
            <button
              onClick={() => handleDelete(id)}
              className="border-2 border-black px-1 sm:px-2 py-1 rounded-md uppercase text-xs font-medium ml-2"
            >
              delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
