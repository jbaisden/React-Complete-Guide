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
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}  
        click={this.switchNameHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler }
        >I'm hard to take down.</Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
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
