import { useState } from "react";
import "./EditModal.css";
import "../tag/Tag.css";

const EditModal = ({ task, onClose, onSave }) => {
  const [formData, setFormData] = useState({ ...task });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagToggle = (tag) => {
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
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
          />

          <div className="tags-group">
            {["HTML", "CSS", "JavaScript", "React"].map((tag) => (
              <button
                type="button"
                key={tag}
                className={
                  formData.tags?.includes(tag)
                    ? `tags selected ${tag.toLowerCase()}`
                    : "tags"
                }
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            id="dropdown"
          >
            <option value="Todo">Todo</option>
            <option value="Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>

          <div className="modal-actions">
            <button type="submit" id="save">
              Save
            </button>
            <button type="button" onClick={onClose} id="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
