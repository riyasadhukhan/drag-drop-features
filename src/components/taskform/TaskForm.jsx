import Tag from "../tag/Tag";
import "../taskform/TaskForm.css";
import { useState } from "react";
import TaskFormFields from "./TaskFormFields";

const TaskForm = ({ taskData, setTaskData }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    task: "",
    status: "Todo",
    tags: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.task.trim() === "") return;
    const alreadyExistTask = taskData.some(
      (t) => t.task.toLowerCase() === formData.task.toLowerCase()
    );
    if (alreadyExistTask) {
      alert("Task already Exist!");
      return;
    }
    setTaskData((prev) => [...prev, formData]);
    setFormData({ id: Date.now(), task: "", status: "Todo", tags: [] });
  };
  return (
    <div className="task-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <TaskFormFields formData={formData} setFormData={setFormData} />
        <div className="btn-group">
          <button type="submit">+Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
