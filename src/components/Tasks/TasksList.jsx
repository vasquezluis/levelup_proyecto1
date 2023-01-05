import React from "react";
import Tasks from "./Tasks";

function TasksList({ user, tasks, toggleTask, handleDelete, handleUpdate }) {
  const currentUserTasks = tasks.filter((item) => item.user === user);

  console.log(
    `lista de tareas de ${user}: ${JSON.stringify(currentUserTasks)}`
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4">
      {currentUserTasks.length !== 0 ? (
        currentUserTasks
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
          .reverse()
      ) : (
        <div className="px-2 pt-6 pb-8 mb-4">
          <h2 className="block text-3xl text-white font-bold mb-2">
            No tienes tareas aun
          </h2>
        </div>
      )}
    </div>
  );
}

export default TasksList;
