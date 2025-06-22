// import type { FormEvent } from "react";
// import { useState } from "react";
// import Box from "./components/Box";

// ✅ 1. Basic Props with Interface
// function App() {
//   return (
//     <div>
//       <Box name="Abhay" />
//     </div>
//   );
// }
// export default App;

// ✅ 2. Using type Alias Instead of interface
// function App() {
//   const sayHello = () => {
//     alert("Hello, World!");
//   };
//   return (
//     <div>
//       <Box label="Click Me!" onClick={sayHello} />
//     </div>
//   );
// }
// export default App;

// ✅ 3. Typing Props Inline (Anonymous Type)
// function App() {
//   return (
//     <div>
//       <Box message="Hii" />
//     </div>
//   );
// }
// export default App;

// function App() {
//   return (
//     <div>
//       <Box heading="heading">
//         <button>Click Me</button>
//       </Box>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [val, setVal] = useState<string>("");
//   return <Box label="Search" value={val} setter={setVal} />;
// }

// export default App;

// interface Person {
//   name: string;
//   age: number;
// }
// function App() {
//   const [user, setUser] = useState<Person>();
//   const submitHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(user);
//   };
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           type="number"
//           value={user?.age || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, age: +e.target.value }))
//           }
//         />
//         <input
//           type="text"
//           value={user?.name || ""}
//           onChange={(e) =>
//             setUser((prev) => ({ ...prev!, name: e.target.value }))
//           }
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// import { createContext, useContext, useState, type ReactNode } from "react";
// import Box from "./components/Box";

// type ThemeType = "light" | "dark";

// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<ThemeType>("light");
//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
// function App() {
//   return (
//     <ThemeProvider>
//       <h1>Theme</h1>
//       <Box />
//     </ThemeProvider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// export default App;

// import { useReducer } from "react";

// type StateType = { count: number; firstName: string };
// type ActionType = { type: "Increment" | "Decrement" | "Reset" };
// function reducer(state: StateType, action: ActionType) {
//   switch (action.type) {
//     case "Increment":
//       return { ...state, count: state.count + 1 };

//     case "Decrement":
//       return { ...state, count: state.count - 1 };

//     case "Reset":
//       return { ...state, count: 0 };

//     default:
//       return state;
//   }
// }
// const initialState: StateType = { count: 0, firstName: "Rohit" };
// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const increase = () => {
//     dispatch({ type: "Increment" });
//   };
//   const reset = () => {
//     dispatch({ type: "Reset" });
//   };
//   const decrease = () => {
//     dispatch({ type: "Decrement" });
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h3>firstName: {state.firstName}</h3>
//       <hr />
//       <h4>count: {state.count}</h4>
//       <button onClick={increase}>Increment</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={decrease}>Decrement</button>
//     </div>
//   );
// }

// export default App;

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "./features/counter/counterSlice";
import { type RootState } from "./store";
import { useState } from "react";

function App() {
  const [val, setVal] = useState<number>(0);
  const dispatch = useDispatch();
  const { count, firstName } = useSelector((state: RootState) => state.counter);
  const incrementByValueHandler = () => {
    setVal(0);
    dispatch(incrementByValue(val));
  };
  return (
    <div>
      <h1>Toolkit</h1>
      <h2>firstName: {firstName}</h2>
      <h2>count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(+e.target.value)}
      />
      <button onClick={incrementByValueHandler} disabled={val < 0}>
        Add
      </button>
    </div>
  );
}

export default App;
