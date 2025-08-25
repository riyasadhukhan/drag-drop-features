import Tag from "../tag/Tag";
import "../taskform/TaskForm.css";
import { useState } from "react";

const TaskForm = ({ taskData, setTaskData }) => {
  const [formData, setFormData] = useState({
    task: "",
    status: "Todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleTag = (tag) => {
    setFormData((prev) => {
      const alreadySelected = prev.tags.includes(tag);
      return {
        ...prev,
        tags: alreadySelected
          ? prev.tags.filter((t) => t !== tag)
          : [...prev.tags, tag],
      };
    });
  };
  const handleSubmit = (e) => {
    if (formData.task.trim() === "") return;
    const alreadyExistTask = taskData.some(
      (t) => t.task.toLowerCase() === formData.task.toLowerCase()
    );
    if (alreadyExistTask) {
      alert("Task already Exist!");
      return;
    }
    setTaskData((prev) => [...prev, formData]);
    setFormData({ task: "", status: "Todo", tags: [] });
  };
  return (
    <div className="task-form-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="task"
          id="task"
          value={formData.task}
          placeholder="Enter your task"
          onChange={(e) => handleChange(e)}
        />
      </form>
      <div className="form-child">
        <div className="tag-group">
          {["HTML", "CSS", "JavaScript", "React"].map((tag) => (
            <Tag
              key={tag}
              tagName={tag}
              isSelected={formData.tags.includes(tag)}
              onclick={() => handleTag(tag)}
            />
          ))}
        </div>
        <div className="status-group">
          <select onChange={handleChange} name="status" value={formData.status}>
            <option value="Todo">Todo</option>
            <option value="Progress">Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="btn-group">
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            +Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
