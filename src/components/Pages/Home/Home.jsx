import React, { useContext, useRef, useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import  bojack from '../../../assets/bojack.png'
import { Filter } from '../../Filter/Filter'
import { Tasks } from '../../Tasks/Tasks'
import { ItemTask } from '../../ItemTask/ItemTask'
import { tasksContext } from '../../Context/Context'

export const Home = () => {
 
 const context = useContext(tasksContext) //Aca se trae el contexto de taskscontext
 const tittleInput = useRef('')
 const descriptionInput = useRef('')
 const autoIncrement = useRef(1) //para almacenar un contador que se incrementará automáticamente para generar identificadores únicos para las nuevas tareas.


 const handleCreateTask = () => {

  const tittle = tittleInput.current.value
  const description = descriptionInput.current.value
  const id = autoIncrement.current++ //Esto es un contador para autoincrementar el contador en los id
  const newTask = { //Se crea el objeto newtask con todos los valores de las tareas 
    id: id,
    tittle: tittle,
    description: description,
    state: false
  }
  let listTasks = [...context.tasks,newTask] //Almacena las tareas anteriores y el objeto nuevo 
  context.setTasks(listTasks) //Se envian las tareas a la lista 
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
          <h2>Usted tiene 4 tareas completadas y 2 tareas pendientes</h2>  
          <hr />
        </section>
        <section className='mainpt2'> 
          <div className='filter'>
            <p>Filtrar:</p>
            <Filter/>
          </div>
          <div className='tasks'>
            <Tasks>
               {context.tasks.map((task) => (<ItemTask //con esto se recorre la informacion y obteniendo valores de los objetos que tengamos almacenados en tasks 
               id = {task.id} 
               title= {task.tittle} 
               description={task.description}/>)) 
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