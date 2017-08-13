import React, { Component } from 'react';

import PrivateHeader from './PrivateHeader';
import AddPerson from './components/AddPerson';
import PersonTable from './components/PersonTable';

import uuid from 'uuid';

console.log(uuid());

export default class Dashboard extends Component {

  state = {
    persons: [],
    person: {}
  }

  addPerson = e => {
    e.preventDefault();

    const { persons, person } = this.state;

    this.setState({
      persons: [
        ...persons,
        {
          id: uuid(),
          ...person
        }
      ]
    })
  }

  handleInputChange = e => {
    const { person } = this.state;
    const { name, value } = e.target;

    this.setState({
      person: {
        ...person,
        [name]: value
      }
    });
  }

  handleClearForm = e => {
    e.preventDefault();

    const { person } = this.state;
    
    this.setState({
      person: {
        name: '',
        upin: '',
        place: '',
        invoice: '',
        fruitWeight: '',
        fruitName: ''
      }
    });
  }

  render() {
    const { ...person } = this.state.person;
    return (
      <div>
        <PrivateHeader />
        <AddPerson 
          onSubmit={this.addPerson} 
          handleInputChange={this.handleInputChange}
          clearInputFields={this.handleClearForm}
          {...person}
        />
        <PersonTable persons={this.state.persons}/>
      </div>
    );
  }
}