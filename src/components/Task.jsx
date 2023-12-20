export default function Task({ task, tasks, setTasks, index }) {
  const deleteTask = () => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const markAsDone = () => {
    const newTasks = [
      ...tasks.slice(0, index),
      { ...task, done: !task.done },
      ...tasks.slice(index + 1),
    ];
    setTasks(
      newTasks.sort((task1, task2) => Number(task1.done) - Number(task2.done))
    );
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="task-box">
      <div>
        <input
          type="checkbox"
          className="task-check"
          id={`check-box-${index}`}
          checked={task.done}
          onChange={markAsDone}
        />
        <label
          htmlFor={`check-box-${index}`}
          className="task"
          style={{ textDecoration: task.done ? "line-through" : "none" }}
        >
          {task.todo}
        </label>
      </div>
      <div>
        <button className="btn del-btn" onClick={deleteTask}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
