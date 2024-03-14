import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import  bojack from '../../../assets/bojack.png'
import { Filter } from '../../Filter/Filter'
import { Tasks } from '../../Tasks/Tasks'
import { ItemTaks } from '../../ItemTask/ItemTask'


export const Home = () => {
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
              <input type="text"  />
            </div>
            <div className=' Input'>
              <p>Descripción de la tarea:</p>
              <input type="text"  />
            </div>
            <button type="button">crear</button>
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
               <ItemTaks title='Hola' description='mamahuevo' />
            </Tasks>
           </div>
        </section>
      </Main>
    </>
  )
}
