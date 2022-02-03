import { useState } from 'react';
import Header from "./components/Header"
import Task from './components/Task';
import Tasks from "./components/Tasks"

function App() {

  const [tasks, setTasks] = useState ([
    
    {
        id: 1,
        texto: 'Ir al cine',
        fecha: '02 de Febrero de 2022',
        terminado: true,
    },
    {
        id: 2,
        texto: 'Comprar en el supermercado',
        fecha: '10 de febrero de 2022',
        terminado: false,
    },
    {
        id: 3,
        texto: 'Hacer app en React',
        fecha: '11 de febrero de 2022',
        terminado: false,
    }
])

//eliminar tarea
const deleteTask = (id) =>{
  //console.log('borrar', id)
  setTasks(tasks.filter((task)=> task.id !== id))
}

  return (
    <div className="container">
      <Header title='Tareas' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
