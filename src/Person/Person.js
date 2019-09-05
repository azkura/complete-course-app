import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <input className="InputFields" type="text" placeholder="enter a name"  
      onChange={props.changed}/>
      <input className="InputFields" type="text" placeholder="enter a age" 
      onChange={props.ageChange}/>
      <p className="Welkome">welkome Your Name and your age is:</p>
      <p className="UserOutput">{props.name}</p>
      <p className="UserOutput">{props.age}</p>
      <button onClick={props.deletePerson}>Delete</button>
    </div>
  )
}

export default person