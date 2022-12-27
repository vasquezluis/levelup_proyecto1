import React from "react";
import Tasks from "./Tasks";

function TasksList({ tasks, toggleTask, handleDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-2">
      {tasks
        .map((task) => (
          // key de la tarea: nombre
          <Tasks
            key={task.name}
            task={task}
            toggleTask={toggleTask}
            handleDelete={handleDelete}
          />
        ))
        .reverse()}
    </div>
  );
}

export default TasksList;
