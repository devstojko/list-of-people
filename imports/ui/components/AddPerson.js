import React, { Component } from 'react';

import SingleInput from './SingleInput';

export default class AddPerson extends Component {
  
  state = {
    name: ''
  }

  handleFullNameChange = (inputName, val) => {
    this.setState({
      [inputName]: val
    })
  }

  render() {
    const {
      name
    } = this.state;
    return (
      <div className="AddPerson">
        <h3>Poljoprivrednik</h3>
  
        <form className="AddPerson__form" >

          <SingleInput 
            inputType={'text'}
            title={'Ime i prezime'}
            name={'name'}
            controlFunc={this.handleFullNameChange}
            content={name}
          />
  
          
  
          <div className="AddPerson__cta" >
            <button className="btn btn--block btn--primary">Dodaj poljoprivrednika</button>
            <button 
              className="btn btn--block btn--primary" 
              
            >
              Obrisi sva polja</button>
          </div>
        </form>
      </div>
    );
  }
}