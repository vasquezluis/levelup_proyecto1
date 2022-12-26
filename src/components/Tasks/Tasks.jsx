import React from "react";

function Tasks({ task }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md min-h-[100px]">
      <h2 className="text-xl font-bold">{task.name}</h2>
      <p>{task.description}</p>
      <div className="grid grid-cols-2 justify-center">
        <button className="bg-yellow-500 mx-2 px-2 py-1 rounded-md mt-4">
          Editar tarea
        </button>
        <button className="bg-red-500 mx-2 px-2 py-1 rounded-md mt-4 ">
          Eliminar tarea
        </button>
      </div>
    </div>
  );
}

export default Tasks;
