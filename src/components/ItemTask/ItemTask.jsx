import React from 'react'

export const ItemTask = ({title,description,changeCheck,checkStatus,status}) => {
  return (
    <>
    <li>
      <div className={status}></div>
      <div className="containerTextCard">
        <p className='titleTask'>{title}:</p>  
        <p className='describeTask'>{description}</p>  
      </div> 
      <input type="checkbox" name="" id="checkboxID" className='checkbox' onChange={ changeCheck } checked={ checkStatus } /> 
    </li>
    </>
  )
}//estas funciones son para activar el check