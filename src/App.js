import React, { Component } from 'react';
import './App.css';

// import PersonList from './PersonList/PersonList'
import Person from './Person/Person'


class App extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      Persons: [
        { name:'', age: '', id: 1},
        { name:'', age: '', id: 2},
        { name:'', age: '', id: 3},
      ],
      showPersons: false
    }
  }

  togglePersonHandler = () => {
    let doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  getNameHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.Persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.Persons]
    persons[personIndex] = person
   
    this.setState({ Persons: persons })
  }

  getAgeHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex(p => p.id === id)
    const person = {...this.state.Persons[personIndex]}
    person.age = event.target.value
    const persons = [...this.state.Persons]
    persons[personIndex] = person

    this.setState({ Persons: persons })
  }

  deletePersonHandler = (personindex) => {
    const persons = [...this.state.Persons]
    persons.splice(personindex, 1)
    this.setState({Persons: persons})
  }

  render() {

    let persons = null

    if(this.state.showPersons) {
      persons = (
        <div className="Persons">
          {
            this.state.Persons.map((person, index) => {
              return <Person key={person.id}
              name={person.name} age={person.age}
              changed={(event) => this.getNameHandler(event, person.id)}
              ageChange={(event) => this.getAgeHandler(event, person.id)}
              deletePerson={()=> this.deletePersonHandler(index)}/>
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonHandler}>Show Persons</button>
        { persons }
      </div>
    )
  }
}

export default App;



// const App = props =>  {
//   const [ nameState, setNameState ] = useState({
//     persons: [
//       { name: ''}
//     ]
//   })

//   const changeName = event => {
//     setNameState({ persons: [ { name: event.target.value } ] })
//   }

//   const onNameChange = () => {
//     let name = 'aziz'
//     setNameState({ persons: [ { name: name } ] })
//   }

//   return (
//     <div className="App">
//       <input type='text' placeholder='enter a name' onChange={changeName} className='Search'/>
//       <button onClick={onNameChange} className='Button'>change name</button>
//      <Person name={nameState.persons[0].name} >and still young</ Person>
//     </div>
//   );
// }


/* <div className="ListOfPersons">
<PersonList persons={this.state.Persons}
personsNameFields={this.getNameHandler.bind(this)}
personsAgeFields={this.getAgeHandler.bind(this)}/>
</div>  */
