import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Input from './InputComp/Input'
import Output from './OutputComp/Output'

class App extends Component {

state = {
  persons: [
    { id: '1rt',name: 'Max', age: 28 },
    { id: 'dfht',name: 'Manu', age: 29 },
    { id: 'zxcv',name: 'Stephanie', age: 26 }
  ], username:'default text',
  showPersons: false 
}

deletePersonHandler = (personIndex) => {
  //using slice method on js array to copy an array instead
  //of getting a pointer reference
  // const persons = this.state.persons.slice();

  //using the Spread operator to create an array copy
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons:persons})
}

nameChangedHandler = (event, id) => {

  const personIndex = this.state.persons.findIndex( p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex] 
  };

  person.name = event.target.value;

  //optional but non-preferred method
  // const person = Object.assign({}, this.state.persons[personIndex]);
    
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState( { persons:persons});
}

inputChangedHandler = (event) => {
  this.setState({
    username:event.target.value    
  })
  console.log(event.target.value)
}

togglePersonsHandle = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
    
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id) } />
          })}
        </div>
      );

    }

      return(
        <div className="App">
          <button 
          style={style}
          onClick={this.togglePersonsHandle }>Toggle Persons</button>

        {persons}

        <Input changed={this.inputChangedHandler } username={this.state.username}  />
        <Output username={this.state.username} /> 

        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a react app!!!'));
  }
}

export default App;
