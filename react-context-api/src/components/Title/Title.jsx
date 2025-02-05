import { useContext } from "react";
import { TitleContext } from "../../../context/context";

export default function Title() {
  const title = useContext(TitleContext);
  return <h1>{title}</h1>;
}
