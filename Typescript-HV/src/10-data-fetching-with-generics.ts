interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchData<T>(url: string): Promise<T[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Something Went Wrong!");
    }
    const data: T[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw error;
  }
}

const url = "https://jsonplaceholder.typicode.com/todos";
fetchData<Todo>(url).then((todos) => {
  const titles = todos.map((todo) => todo.title);
  console.log(titles);
});

const url2 = "https://jsonplaceholder.typicode.com/posts";
fetchData<Post>(url2).then((posts) => {
  const body = posts.map((post) => post.body);
  console.log(body);
});
