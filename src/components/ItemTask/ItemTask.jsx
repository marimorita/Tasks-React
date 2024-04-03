import React from 'react'

export const ItemTask = ({title,description}) => {
  return (
    <>
    <li>
      <div className="status"></div>
      <div className="containerTextCard">
        <p className='titleTask'>{title}:</p>  
        <p className='describeTask'>{description}</p>  
      </div>
      <input type="checkbox" name="" id="checkboxID" className='checkbox' />
    </li>
    </>
  )
}