import React from "react";
import Tasks from "./Tasks";

function TasksList({ tasks, toggleTask, handleDelete, handleUpdate }) {
  return (
    <div className="grid grid-cols-4 ">
      {tasks
        .map((task) => (
          // key de la tarea: nombre
          <Tasks
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
        .reverse()}
    </div>
  );
}

export default TasksList;
