"use strict";
// <--------------- API Call ------------------>
// type APIType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };
// interface APIType {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }
// async function fetchUser(): Promise<APIType> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
//   const data = await response.json();
//   return data;
// }
// fetchUser().then((data: APIType) => {
//   console.log(data);
// });
// <------------------- API Call ---------------------->
// ✅ 1. Using fetch() in TypeScript
// fetch() is the most common method to make HTTP requests. TypeScript lets you define types for the request and the response.
// async function fetchUser(): Promise<void> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   const data: User = await response.json();
//   console.log("User:", data);
// }
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// fetchUser();
// async function createPost(post: NewPost): Promise<Post> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(post),
//   });
//   if (!response.ok) {
//     throw new Error("Failed to create post");
//   }
//   return await response.json();
// }
// interface NewPost {
//   title: string;
//   body: string;
//   userID: number;
// }
// interface Post extends NewPost {
//   id: number;
// }
// createPost({ title: "Hello", body: "This is a test", userID: 1 }).then(
//   console.log
// );
// async function safeFetch() {
//   try {
//     const res = await fetch("https://api.example.com/data");
//     if (!res.ok) throw new Error("Request failed");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// safeFetch();
