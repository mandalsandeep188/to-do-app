import { useEffect, useState } from "react";

import AddTask from "./AddTask";
import Task from "./Task";

export default function Main() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
      if (storedTasks?.length > 0) {
        setTasks(
          storedTasks.sort(
            (task1, task2) => Number(task1.done) - Number(task2.done)
          )
        );
      }
    }
  }, []);

  return (
    <div className="task-container">
      <AddTask tasks={tasks} setTasks={setTasks} />

      <div className="task-list">
        {tasks.map((task, i) => (
          <Task
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            index={i}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
