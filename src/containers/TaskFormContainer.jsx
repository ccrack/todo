import React, {useState} from "react";
import TaskForm from "../components/TaskForm";

export default function TaskFormContainer({addTask}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  const handleChange = (e) =>{
    e.preventDefault();
    setText(e.target.value)
  }
  return <TaskForm text={text} handleChange={handleChange} handleSubmit={handleSubmit}/>;
}
