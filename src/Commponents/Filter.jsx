import React from 'react'
import { useState } from 'react'

const Filter = () => {

    const [values, setvalue] =useState("")

    const names = ["ali","umair","sunny","sarib","mubeen","tabish","adeel","jhon"] 
    const tolowerCase = values.toLowerCase()

  return (
    <div className='main'>
        <span>Enter the Name</span>
        <input type="text" value={values} onChange={e => setvalue(e.target.value)} />
        {names.filter(name => name.toLowerCase().includes(tolowerCase)).map(filteredName => (
        <li>
           {filteredName}
        </li>
      ))}
      
    </div>
  )
}

export default Filter
