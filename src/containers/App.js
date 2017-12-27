import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import Person from '../components/Persons/Person/Person';
import Input from '../components/InputComp/Input';
import Output from '../components/OutputComp/Output';
import ValidationComponent from '../components/Assignment 2/ValidationComponent';
import CharComponent from '../components/Assignment 2/CharComponent';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'; 

class App extends Component {

state = {
  persons: [
    { id: '1rt',name: 'Max', age: 28 },
    { id: 'dfht',name: 'Manu', age: 29 },
    { id: 'zxcv',name: 'Stephanie', age: 26 }
  ], username:'default text',
  showPersons: false ,
  inputLength: 0,
  inputTxt:''
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


togglePersonsHandle = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {    
    let charComponents = (
      this.state.inputTxt.split('').map( (char,index) => {
        return <CharComponent Character={char}
         click={() => this.deleteCharHandler(index)}
         key={index}
         />          
      })
    );

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
            <Persons persons={this.state.persons} 
            clicked = {this.deletePersonHandler}
            changed={this.nameChangedHandler} />            
        </div>
      );

    }

      return(
        <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandle}
          />
        {persons}
        <br />
        <hr/>
        <h3>Assignment 2</h3>
        <input type="text" onChange={this.a2UpdateLengthHandler}  value={this.state.inputTxt} />
        <p>{this.state.inputTxt.length}</p>
        <ValidationComponent InputLength={this.state.inputTxt.length} />
        <br />
        {charComponents}
        <br />
        <hr/>        
        <h3>Assignment 1</h3>
        <Input changed={this.inputChangedHandler } username={this.state.username}  />
        <Output username={this.state.username} /> 

        </div>
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a react app!!!'));
  }


  //ASSIGNMENT METHODS
  inputChangedHandler = (event) => {
    this.setState({
      username:event.target.value    
    })
    console.log(event.target.value)
  }  
  
  deleteCharHandler = (index) => {
    const text = this.state.inputTxt.split('');
    text.splice(index,1);
    this.setState({inputTxt:text.join('')});
    
    // let inputTxt = this.state.input;
    // inputTxt = inputTxt.replace(char, '');
    // console.log('preparing to delete ' + char + ' ' + inputTxt);
    // this.setState({inputTxt:this.state.inputTxt.replace(char,'')});
  }
  
  a2UpdateLengthHandler = (event) => {
    this.setState( {
      inputLength: event.target.value.length,
      inputTxt:event.target.value
    });
  }

}

export default App;
