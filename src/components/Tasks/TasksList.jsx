import React from "react";
import Tasks from "./Tasks";

function TasksList({ tasks }) {
  return (
    <div className="grid grid-cols-4 gap-2 py-2">
      {tasks.map((task) => (
        // key de la tarea: nombre
        <Tasks key={task.name} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
