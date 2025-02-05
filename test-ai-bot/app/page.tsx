"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { getCompletion } from "@/utils/openai";

export default function Home() {
  
const [userQuestion, setUserQuestion] = useState("");
const [aiReply, setAiReply] = useState<any>("");



function handleChange(event: any) {
    setUserQuestion(event.target.value);
    // Get rid of this console.log
    console.log(userQuestion);
}

function handleSubmit(event: any) {
    event.preventDefault();
    getCompletion(userQuestion, setAiReply);
}

  return (
    <div className="container" onSubmit={(e) => handleSubmit(e)}>
      <form action="submit" method="POST">
        <label> Testing
          <input type="text" value={userQuestion} name="userQuestion" onChange={handleChange} />
        </label>
      </form>
      <div><h1>{aiReply}</h1></div>
    </div>
  );
}
