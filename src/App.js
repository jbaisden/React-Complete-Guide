import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Input from './InputComp/Input'
import Output from './OutputComp/Output'

class App extends Component {

state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ], username:'default text',
  showPersons: false 
}

switchNameHandler = (newName) => {
  console.log('was clicked!');
  this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Katie', age: 26 }
    ]    
  })
}

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Katie', age: 26 }
    ]
  })
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
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} changed={this.nameChangedHandler} />
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
