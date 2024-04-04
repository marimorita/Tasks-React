import React, { useContext, useEffect, useRef, useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import  bojack from '../../../assets/bojack.png'
import { Filter } from '../../Filter/Filter'
import { Tasks } from '../../Tasks/Tasks'
import { ItemTask } from '../../ItemTask/ItemTask'
import { tasksContext } from '../../Context/Context'

export const Home = () => {
 
 const [viewTask, setViewTask] = useState ('All') //este es el estado incial de todas las tareas
 const [counter, setCounter] = useState (0)
 const [count, setCount] = useState (0)
 const context = useContext(tasksContext) //Aca se trae el contexto de taskscontext
 const tittleInput = useRef('')
 const descriptionInput = useRef('')
 const autoIncrement = useRef(1) //para almacenar un contador que se incrementará automáticamente para generar identificadores únicos para las nuevas tareas.

 useEffect( () => { // Esto es un estado que se puede mutar en tiempo actual

  const complete = context.tasks.filter (tasksComplete => tasksComplete.state).length //este cuenta todas las que estan completas solo si estan completas
  const waiting = context.tasks.length - complete //aca se restan las completas menos las totales

  setCounter(complete)
  setCount(waiting)
 }, [context.tasks] //se hace lo anterior si se cambia algo en el estado de tasks

 )
 const handleCreateTask = () => {

  const tittle = tittleInput.current.value
  const description = descriptionInput.current.value
  const id = autoIncrement.current++ //Esto es un contador para autoincrementar el contador en los id
  const newTask = { //Se crea el objeto newtask con todos los valores de las tareas 
    id: id,
    tittle: tittle,
    description: description,
    style:'status',
    state: false //esta en false para q todas inicien en pendientes
  }
  let listTasks = [...context.tasks,newTask] //Almacena las tareas anteriores y el objeto nuevo 
  context.setTasks(listTasks) //Se envian las tareas a la lista 
}
 const changeStatus = (id) => {

  const updateTask = context.tasks.map(update => {

    if (update.id === id) { //si el id que estoy cliqueando es el mimso que existe en alguna de las tareas que recorro pasa algo 
      const newStyle = update.style === 'status' ? 'statusGreen': 'status' //esto es una funcion ternaria
      const newStatus = !update.state //funcion bandera para hacer lo contrario 
    if (newStatus) {
      setCounter(setComplete => setComplete +1) //si se cambia a true, las tareas completas se suman 1
      setCount (setPending => setPending -1) //si se cambia a false las treas pendientes se restan 1 
     }else{
      setCounter(setComplete => setComplete -1) //si se cambia a true, las tareas completas se suman 1
      setCount (setPending => setPending +1) //si se cambia a false las treas pendientes se restan 1 
     }
      return {...update,state:newStatus, style:newStyle} //retorna los nuevos parametros que salieron de lo anterior
    }
    return update
  })
  context.setTasks(updateTask) //se envian todos los cambios al alamcenamiento de task
 }

 const filter = () =>{

  if (viewTask === 'All') {
    return context.tasks
  } else if (viewTask === 'Pending') {
    return context.tasks.filter (filter => !filter.state)
  }else if (viewTask === 'Finish') {
    return context.tasks.filter (filter => filter.state)
  }
 }

  return (
    <>
      <Header>
        <div className='containerHeader'>
          <h1>Lista de tareas</h1>
          <img className='logo' src={bojack} alt="logo" />
        </div>
      </Header>
      <Main>
        <section className='mainpt1'>    
          <div className="containerButtonInputs">
            <div className='Input'>
              <p>titulo de la tarea:</p>
              <input type="text" ref = {tittleInput} />
            </div>
            <div className=' Input'>
              <p>Descripción de la tarea:</p>
              <input type="text" ref = {descriptionInput} />
            </div>
            <button type="button" onClick = {handleCreateTask} >crear</button> 
          </div>  
          <h2>Usted tiene {counter} tareas completadas y {count} tareas pendientes</h2>  
          <hr />
        </section>
        <section className='mainpt2'> 
          <div className='filter'>
            <p>Filtrar:</p>
            <Filter filterValue = {viewTask} filterChange={option => setViewTask (option.target.value)} /* capturar y enviar el nuevo estado de la funcion y se hace obteninedo el valor de la sopciones del select */  />
          </div>
          <div className='tasks'>
            <Tasks>
               {filter().map((task) => (<ItemTask //con esto se recorre la informacion y obteniendo valores de los objetos que tengamos almacenados en tasks 
               key={task.id}//Crear un llave unica para cada tarea
               id = {task.id} 
               title= {task.tittle} 
               description={task.description}
               status={task.style}
               checkStatus={task.state}
               changeCheck={()=>changeStatus(task.id)} //aca se envia el id de las tareas a la funcion, es el parametro
               />)) 
               //se pone 'task' pq es el alias que se le da anteriormente  y así es el estandar de la función flecha 
                }
            </Tasks>
           </div>
        </section>
      </Main>
      <Footer>
        <div className='footer'>
          <h1> ✦ 𝖒𝖆𝖗𝖎 𝖒𝖔𝖗𝖎𝖙𝖆 ✦ </h1>
        </div>
      </Footer>
    </>
  )
}