import React, { Component } from 'react';
import './App.css';

// Refs accessing DOM ELEMENTS //

// CREATED CLASS COMPONENTS

// CREATED FUNCTIONAL COMPONENTS

const MyInput = (props) =>{
  return(
    <input
    ref={props.inputRef} 
    type="text"/>
  )
}

const FuncCustomComponent = () => {
  let inputRef = null;
  
  const onClick = () => {
    inputRef.focus();
  }

  return(
    <div>
      <div>
      <span>My Input</span>
      <MyInput
      ref={(input) => {
        inputRef = input
      }}
      />
      <input
      ref={(input)=>
        {inputRef = input}}
      type="text"/>
      <input
      type="text"
      value="submit"
      onClick={onClick}
      />
      </div>
    </div>
  )
}




class App extends Component{
  onClick = () => {
  }

  // So you can press Enter to have the selector go to the next box
  onKeyUp = (target, e) => {
    if(e.keyCode === 13){
      switch (target){
        case 'firstName' :
        this.lastName.focus();
        break;
        case 'lastName' :
        this.age.focus();
        break;
        case 'Age' :
        this.submit.focus();
        break;
        default:
        this.firstName.focus();
      }
    }
  }

  render(){
    return(
      <>
      <div className="App">
      <FuncCustomComponent/>
        <span>First Name:</span>
        <input ref={(input) =>{this.firstName = input}} 
        onKeyUp={this.onKeyUp.bind(this, 'firstName')}
        type="text" />
      </div>
      <div>
        <span>Last Name:</span>
        <input ref={(input) =>{this.lastName = input}}
        onKeyUp={this.onKeyUp.bind(this, 'lastName')} 
        type="text" />
      </div>
      <div>
        <span>Age:</span>
        <input ref={(input) =>{this.age = input}} 
        onKeyUp={this.onKeyUp.bind(this, 'Age')}
        type="text" />
      </div>
      <div>
        <input type="submit" 
        value="submit" 
        ref={(input) =>{this.submit = input}} 
        onKeyUp={this.onKeyUp.bind(this, 'submit')}
        onClick={this.onClick}/>
      </div>
      </>
    )
  }
}
export default App;
