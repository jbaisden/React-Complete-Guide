import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Input from './InputComp/Input'
import Output from './OutputComp/Output'
import ValidationComponent from './Assignment 2/ValidationComponent'
import CharComponent from './Assignment 2/CharComponent'

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

togglePersonsHandle = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
    
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
      style.backgroundColor = 'red';
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

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    } 
    
    if (this.state.persons.length <= 1) {
      classes.push('bold');      
    }


      return(
        <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
          <button 
          style={style}
          onClick={this.togglePersonsHandle }>Toggle Persons</button>
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
}

export default App;
