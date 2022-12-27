import React from "react";

function Tasks({ task, toggleTask, handleDelete }) {
  return (
    <div
      className={`${
        task.done ? "bg-slate-800 opacity-40" : "bg-slate-800"
      } text-white p-4 rounded-md min-h-[100px]`}
    >
      <div className="flex justify-between mb-5">
        <h2 className="text-xl font-bold">{task.name}</h2>
        <div>
          <label htmlFor={task.name} className="mx-2 cursor-pointer">
            Done
          </label>
          <input
            className="cursor-pointer accent-orange-500"
            id={task.name}
            type="checkbox"
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
        </div>
      </div>
      <p className="text-slate-300">{task.description}</p>
      <div className="grid grid-cols-2 justify-center">
        <button className="bg-teal-500 py-1 rounded-md mt-4">Editar</button>
        <button
          className="bg-orange-500 mx-2 px-2 py-1 rounded-md mt-4"
          onClick={() => handleDelete(task)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Tasks;
