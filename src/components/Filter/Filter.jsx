import React from 'react'

export const Filter = ({filterChange,filterValue}) => {
  return (
    <label>
        <select name="filter" id="filter" onChange={filterChange} value={filterValue}>
            <option value='All'>Todas las tareas</option>
            <option value='Pending'>Pendientes</option>
            <option value='Finish'>Finalizadas</option>
        </select>
    </label>
  )
}