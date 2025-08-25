import Todo from "../../assets/todo.jpg";
import Progress from "../../assets/progress.jpg";
import Done from "../../assets/done.jpg";
import "../taskTable/TaskTable.css";

const TaskTable = ({ taskData, setTaskData }) => {
  const handleDelete = (item) => {
    console.log(item);
    setTaskData((prev) => prev.filter((task) => task.task !== item.task));
  };
  const renderTask = (status) => {
    return taskData
      .filter((item) => item.status === status)
      .map((item, index) => (
        <div className="task-data" key={index}>
          <div className="task-name">{item.task} </div>
          <div className="task-tags">
            <div className="tag-group">
              {item.tags.map((t, index) => (
                <span className={`${t.toLowerCase()}`} key={index}>
                  {t}
                </span>
              ))}
            </div>
            <button className="del-btn" onClick={() => handleDelete(item)}>
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      ));
  };

  return (
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
  );
};

export default TaskTable;
