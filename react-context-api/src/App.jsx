import { useState } from "react";
import { CountContext, TitleContext } from "../context/context";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TitleContext.Provider value={"A title!"}>
        <Title />
      </TitleContext.Provider>
      <div className="card">
        <CountContext.Provider value={{ count, setCount }}>
          <Button />
        </CountContext.Provider>
      </div>
    </>
  );
}

export default App;
