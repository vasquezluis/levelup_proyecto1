import { useState } from "react";

function TasksForm(props) {
  // crear estados para titulo y descripcion
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const guardarDatos = (e) => {
    e.preventDefault();

    // ejecutar funcion createNewTask, main obtiene los datos
    props.createNewTask(name, description);

    // limpiar datos del formulario
    setName("");
    setDescription("");
  };


  return (
    <div className="max-w-dm mx-auto" onSubmit={guardarDatos}>
      <form className="bg-slate-800 p-10 md-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crear tarea</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Titulo"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe una descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-teal-600 px-3 py-2 my-2 text-white rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TasksForm;
