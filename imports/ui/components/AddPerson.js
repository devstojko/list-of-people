import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import FormGroup from './FormGroup';
import Paper from './Paper';

export default class AddPerson extends Component {
  
  state = {
    name: '',
    upin: '',
    place: '',
    invoice: '',
    fruitWeight: '',
    fruitName: ''
  }

  handleFormSubmit= e => {
    e.preventDefault();

    const {
      name,
      upin,
      place,
      invoice,
      fruitWeight,
      fruitName
    } = this.state;

    const person = {
      name,
      upin,
      place,
      invoice,
      fruitWeight,
      fruitName
    }

    Meteor.call('person.insert', person);
  }

  handleOnInputCnage = (inputName, val) => {
    // fruitWeight must be typeof number passed to db
    // validate user input to be numbers
    if (inputName === 'fruitWeight') {
      const numbers = /^[0-9]+$/;
      return numbers.test(val) || val === ''
        ? this.setState({ [inputName]: Number(val) })
        : false;
    } 
    this.setState({ [inputName]: val });
  }

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      name: '',
      upin: '',
      place: '',
      invoice: '',
      fruitWeight: '',
      fruitName: ''
    });
  }

  render() {
    const {
      name,
      upin,
      place,
      invoice,
      fruitWeight,
      fruitName
    } = this.state;
    return (
      <div className="AddPerson Paper">
        <h3>Poljoprivrednik</h3>
  
        <form 
          className="AddPerson__form"
          onSubmit={this.handleFormSubmit} >

          <div className="AddPerson__formFields">
          <FormGroup 
            inputType={'text'}
            title={'Ime i prezime'}
            name={'name'}
            controlFunc={this.handleOnInputCnage}
            content={name}
          />
          <FormGroup 
            inputType={'text'}
            title={'JMBG ili BPG'}
            name={'upin'}
            controlFunc={this.handleOnInputCnage}
            content={upin}
          />
          <FormGroup 
            inputType={'text'}
            title={'Mesto'}
            name={'place'}
            controlFunc={this.handleOnInputCnage}
            content={place}
          />
          <FormGroup 
            inputType={'text'}
            title={'Broj racuna'}
            name={'invoice'}
            controlFunc={this.handleOnInputCnage}
            content={invoice}
          />
          <FormGroup 
            inputType={'text'}
            title={'Tezina'}
            name={'fruitWeight'}
            controlFunc={this.handleOnInputCnage}
            content={fruitWeight}
          />
          <FormGroup 
            inputType={'text'}
            title={'Voce'}
            name={'fruitName'}
            controlFunc={this.handleOnInputCnage}
            content={fruitName}
          />
          </div>
          
          <div className="AddPerson__cta" >
            <button
              className="btn btn--block btn--success"
              type="submit"
            >Dodaj poljoprivrednika</button>
            <button 
              className="btn btn--block btn--danger" 
              onClick={this.handleClearForm}
            >
              Obrisi sva polja</button>
          </div>
        </form>
      </div>
    );
  }
}