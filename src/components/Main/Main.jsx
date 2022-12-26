import { useState, useEffect } from "react";
import TasksList from "../Tasks/TasksList";
import TasksForm from "../Tasks/TasksForm";

function Main() {
  // lista de tareas iniciales
  const [tasksItems, setTasksItems] = useState([]);

  // useeffect para revisar si hay items en el localstorage cuando carga la pagina
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  // ejecutar useEffect para guardar items en localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  // obteniendo datos de tasksForm
  // agregar nuevo arreglo para enviarlo a tasksList
  const createTask = (taskName, taskDescripcion) => {
    // comprobar existencia de tarea en la lista, para no repetirla
    const exists = tasksItems.find((item) => item.name === taskName);

    // crear tarea si no existe
    if (!exists) {
      setTasksItems([
        ...tasksItems,
        {
          name: taskName,
          description: taskDescripcion,
          done: false,
        },
      ]);
    } else {
      alert(`La tarea ${taskName} ya esxiste`);
    }
  };

  // funcion para actualizar una tarea (toogle)
  // task es la tarea que sale de Tasks.jsx
  const toggleTask = (task) => {

    // actualizar array de tareas principal
    setTasksItems(
      tasksItems.map((item) =>
        // nuevo array con la tarea (done) cambiada, si name(id) coincide
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className="text-3xl font-bold container grid mx-auto place-items-center text-white bg-slate-800 p-5">
        Tareas de: Luis
      </div>
      <div className="container mx-auto p-2">
        <TasksForm createNewTask={createTask} />
        <TasksList tasks={tasksItems} toggleTask={toggleTask} />
      </div>
    </main>
  );
}

export default Main;
