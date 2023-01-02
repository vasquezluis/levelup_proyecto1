import { useState } from "react";

function UpdateForm(props) {
  // crear estados para titulo y descripcion
  const [name, setName] = useState(props.task.name);
  const [description, setDescription] = useState(props.task.description);

  const actualizarDatos = (e) => {
    e.preventDefault();

    let task = { ...props.task, name, description };

    // actualizar show
    props.updateTasks(task);

    // limpiar datos del formulario
    setName("");
    setDescription("");
  };

  const cancel = (e) => {
    e.preventDefault();
    props.cancelUpdate(false);
  };

  return (
    <div className="max-w-dm mx-auto" onSubmit={actualizarDatos}>
      <form className="bg-slate-800 p-10 md-4">
        <h1 className="text-2xl font-bold text-white mb-3">Actualizar tarea</h1>
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
          Actualizar
        </button>
        <button
          onClick={cancel}
          className="bg-orange-500 mx-2 px-3 py-2 my-2 text-white rounded-md"
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default UpdateForm;
