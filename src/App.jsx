import { useState } from "react";
import "./App.css";
import TaskForm from "./components/taskform/TaskForm";
import TaskTable from "./components/taskTable/TaskTable";

function App() {
  const [taskData, setTaskData] = useState([]);
  return (
    <>
      <TaskForm taskData={taskData} setTaskData={setTaskData} />
      <TaskTable taskData={taskData} setTaskData={setTaskData} />
    </>
  );
}

export default App;
