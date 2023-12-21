import { useState } from "react";

export default function AddTask({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim().length > 0) {
      const newTasks = [...tasks, { todo: task, done: false }];
      setTasks(
        newTasks.sort((task1, task2) => Number(task1.done) - Number(task2.done))
      );
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTask("");
    }
  };

  return (
    <div className="add-task">
      <div className="add-input">
        <label htmlFor="add-task-input" className="input-label">
          Add Task Here
        </label>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
          className="add-form"
        >
          <input
            value={task}
            id="add-task-input"
            onChange={(e) => setTask(e.target.value)}
            placeholder="eg. Build Google Today! 🚀"
          />
          <button className="add-btn btn">+ Add</button>
        </form>
      </div>
    </div>
  );
}
