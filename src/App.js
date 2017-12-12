import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

state = {
  persons: [
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephanie', age: 26 }
  ]
}

switchNameHandler = () => {
  console.log('was clicked!');
  this.setState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Katie', age: 26 }
    ]    
  })
}


  render() {
      return(
        <div className="App">
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  >I'm hard to take down.</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a react app!!!'));
  }
}

export default App;
