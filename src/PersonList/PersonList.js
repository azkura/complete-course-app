import React from 'react'
import './PersonList.css'

import Person from '../Person/Person'

const personList = props => {
  return (
    <div className="PersonList">
      {
         props.persons.map(person => {
          return <Person key={person.id} name={person.name}
          age={person.age}
          personsNameFields={props.personsNameFields}
          personsAgeFields={props.personsAgeFields}/>
        })
      }
    </div>
  )
}

export default personList