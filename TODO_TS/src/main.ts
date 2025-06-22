import "./style.css";

interface Todo {
  readonly id: string;
  title: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

const myForm = document.getElementById("myForm") as HTMLFormElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const todoContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    id: crypto.randomUUID(),
    title: todoInput.value,
    isCompleted: false,
  };
  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
};

const generateTodoItem = (id: string, title: string, isCompleted: boolean) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find((item) => {
      if (item.id === id) item.isCompleted = checkBox.checked;
    });
    paragraph.className = checkBox.checked ? "textCut" : "";
  };

  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut" : "";

  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "X";
  btn.className = "deleteBtn";
  btn.onclick = () => {
    deleteTodo(id);
  };

  todo.append(checkBox, paragraph, btn);
  todoContainer.append(todo);
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((item) => item.id === id);
  todos.splice(idx, 1);
  renderTodo(todos);
};

const renderTodo = (todos: Todo[]) => {
  todoContainer.innerHTML = "";
  if (todos.length == 0)
    todoContainer.innerHTML = `<p class="noTodo">No Todo Yet</p>`;
  todos.forEach((item) => {
    generateTodoItem(item.id, item.title, item.isCompleted);
  });
};
