import { useState, useEffect } from "react";
import TasksList from "../Tasks/TasksList";
import TasksForm from "../Tasks/TasksForm";
import UpdateForm from "../Tasks/UpdateForm";

function Main({ user, logout }) {
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
    // tarea vacia
    if (taskName.trim() === "" || taskDescripcion.trim() === "") {
      alert("Porfavor rellene los campos");
    } else {
      // comprobar existencia de tarea en la lista, para no repetirla
      const exists = tasksItems.find((item) => item.name === taskName);

      // crear id
      let id = 0;

      const itemsForLastId = [...tasksItems];
      const idList = itemsForLastId.map((item) => item.id);

      if (idList.length === 0) {
        id = 0;
      } else {
        const highiestId = Math.max(...idList);
        id = highiestId + 1;
      }

      // crear tarea si no existe
      if (!exists) {
        setTasksItems([
          ...tasksItems,
          {
            id: id,
            name: taskName,
            description: taskDescripcion,
            done: false,
          },
        ]);
      } else {
        alert(`La tarea "${taskName}" ya esxiste`);
      }
    }
  };

  // funcion para actualizar una tarea (toogle)
  // task es la tarea que sale de Tasks.jsx
  const toggleTask = (task) => {
    // actualizar array de tareas principal
    setTasksItems(
      tasksItems.map((item) =>
        // nuevo array con la tarea (done) cambiada, si name(id) coincide
        item.id === task.id ? { ...item, done: !item.done } : item
      )
    );
  };

  // funcion para (eliminar tareas)
  const handleDelete = (task) => {
    setTasksItems(tasksItems.filter((item) => item.name !== task.name));
  };

  // funcion para editar tareas
  const [showUpdate, setShowUpdate] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState({});
  const handleUpdate = (task) => {
    setShowUpdate(true);
    setTaskToUpdate(task);
  };
  const updateTasks = (task, show) => {
    // copia de las tareas
    let newTasks = [...tasksItems];

    // buscar tarea y actualizar datos
    const taskFound = newTasks.findIndex((item) => item.id === task.id);

    newTasks[taskFound].name = task.name;
    newTasks[taskFound].description = task.description;

    // guardar nuevos datos
    setTasksItems(newTasks);

    setShowUpdate(show);
  };

  // funcion para cancelar actualizacion
  const cancelUpdate = (show) => {
    setShowUpdate(show);
  };

  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className="text-3xl font-bold container grid mx-auto place-items-center text-white bg-slate-800 p-5">
        Tareas de: {user}
        <button onClick={logout}>Salir</button>
      </div>
      <div className="container mx-auto p-2">
        {showUpdate ? (
          <UpdateForm
            task={taskToUpdate}
            updateTasks={updateTasks}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <TasksForm createNewTask={createTask} />
        )}
        {tasksItems.length !== 0 ? (
          <TasksList
            tasks={tasksItems}
            toggleTask={toggleTask}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ) : (
          <div className="container mx-auto grid place-content-center h-[200px]">
            <h2 className="text-2xl font-bold capitalize text-zinc-50">
              No hay tareas aun
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}

export default Main;
