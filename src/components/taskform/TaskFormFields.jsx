import Tag from "../tag/Tag";
import "../taskform/TaskForm.css";

const TaskFormFields = ({ formData, setFormData }) => {
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
  return (
    <>
      <input
        type="text"
        name="task"
        id="task"
        value={formData.task}
        placeholder="Enter your task"
        onChange={(e) => handleChange(e)}
      />
      <div className="form-child">
        <div className="tag-group">
          {["HTML", "CSS", "JavaScript", "React"].map((tag) => (
            <Tag
              key={tag}
              tagName={tag}
              isSelected={formData.tags.includes(tag)}
              onClick={() => handleTag(tag)}
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
      </div>
    </>
  );
};

export default TaskFormFields;
