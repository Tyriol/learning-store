import { useContext } from "react";
import { CountContext } from "../../../context/context";

export default function Button() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>;
}
