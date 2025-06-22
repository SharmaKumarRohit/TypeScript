// ✅ 1. Basic Props with Interface
// interface Person {
//   name: string;
//   age?: number;
// }
// const Box: React.FC<Person> = ({ name, age }) => {
//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//       {age && <p>You are {age} years old.</p>}
//     </div>
//   );
// };
// export default Box;

// ✅ 2. Using type Alias Instead of interface
// type ButtonProps = {
//   label: string;
//   onClick: () => void;
// };
// const Box: React.FC<ButtonProps> = ({ label, onClick }) => {
//   return <button onClick={onClick}>{label}</button>;
// };
// export default Box;

// ✅ 3. Typing Props Inline (Anonymous Type)
// const Box = ({ message }: { message: string }) => <p>{message}</p>;
// export default Box;

// ✅ 4. Default Props
// interface BoxProps {
//   text?: string;
// }
// function Box({ text = "Default Info" }: BoxProps) {
//   return <div>{text}</div>;
// }
// export default Box;

// ✅ 5. Children Prop
// interface BoxProps {
//   children: React.ReactNode;
// }
// function Box({ children }: BoxProps) {
//   return <div>{children}</div>;
// }
// export default Box;

// import type { ReactNode } from "react";

// type PropType = {
//   heading: string;
//   count?: number;
//   children: ReactNode;
// };
// function Box({ heading, count, children }: PropType) {
//   return (
//     <div>
//       <h1>{heading}</h1>
//       {count && <p>{count}</p>}
//       {children}
//     </div>
//   );
// }

// export default Box;

// type InputType = string | number;

// const Box = <T extends InputType>({
//   label,
//   value,
//   setter,
// }: {
//   label: string;
//   value: T;
//   setter: React.Dispatch<React.SetStateAction<T>>;
// }) => {
//   return (
//     <form>
//       <label>{label}</label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setter(e.target.value as T)}
//       />
//     </form>
//   );
// };

// export default Box;

import { useTheme } from "../App";

function Box() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className="boxContainer"
      style={{
        backgroundColor: theme === "light" ? "rgb(40, 40, 40)" : "white",
        color: theme === "light" ? "white" : "rgb(40, 40, 40)",
      }}
    >
      <h1>Box</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Box;
