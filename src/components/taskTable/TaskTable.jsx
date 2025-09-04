import Todo from "../../assets/todo.jpg";
import Progress from "../../assets/progress.jpg";
import Done from "../../assets/done.jpg";
import "../taskTable/TaskTable.css";
import { useState } from "react";
import EditModal from "../taskform/EditModal";

const TaskTable = ({ taskData, setTaskData }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleDelete = (id) => {
    setTaskData((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (item) => {
    setEditingTask(item);
    setShowModal(true);
  };
  const handleUpdate = (updatedTask) => {
    setTaskData((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setShowModal(false);
    setEditingTask(null);
  };
  const renderTask = (status) => {
    return taskData
      .filter((item) => item.status === status)
      .map((item, index) => (
        <div className="task-data" key={item.id}>
          <div className="task-name">{item.task} </div>
          <div className="task-tags">
            <div className="tag-group">
              {item.tags.map((t, index) => (
                <span className={`${t.toLowerCase()}`} key={index}>
                  {t}
                </span>
              ))}
            </div>
            <div className="btn">
              <button className="del-btn" onClick={() => handleEdit(item)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="del-btn" onClick={() => handleDelete(item.id)}>
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <>
      {showModal && (
        <EditModal
          task={editingTask}
          onClose={() => setShowModal(false)}
          onSave={handleUpdate}
        />
      )}
      <div className="table-container">
        <div className="column">
          <div className="header">
            <img src={Todo} alt="todo" />
            <span>Todo</span>
          </div>
          {renderTask("Todo")}
        </div>
        <div className="column">
          <div className="header">
            <img src={Progress} alt="progress" />
            <span>In Progress</span>
          </div>
          {renderTask("Progress")}
        </div>
        <div className="column">
          <div className="header">
            <img src={Done} alt="done" />
            <span>Done</span>
          </div>
          {renderTask("Done")}
        </div>
      </div>
    </>
  );
};

export default TaskTable;
