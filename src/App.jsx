import { useState } from 'react';
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTarea from './components/AddTarea';

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

//marcar como terminado
const togleTerminado = (id) => {
  //console.log(id)
  setTasks(tasks.map((task)=>task.id === id ? {...task, terminado : !task.terminado}:task))
}


  return (
    <div className="container">
      <Header title='Tareas' />
      <AddTarea />
     {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={togleTerminado} />:'No hay tareas que mostrar' }
    </div>
  )
}

export default App
