import React, { Component } from 'react';
import uuid from 'uuid';

import PrivateHeader from './PrivateHeader';
import AddPerson from './components/AddPerson';
import PersonTable from './components/PersonTable';

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
          _id: uuid(),
          ...person
        }
      ]
    })
  }

  removePerson = _id => {
    const { persons } = this.state;

    this.setState({
      persons: persons.filter(person => person._id !== _id)
    })
  }

  editPerson = (index, dataType, value) => {
    const { persons } = this.state;

    const newState = persons.map((person, i) => {
      if (i == index) {
        return {...person, [dataType]: value}
      }
      return person;
    })

    this.setState({
      persons: newState
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
        <PersonTable 
          persons={this.state.persons}
          removePerson={this.removePerson}
          onPersonCellChange={this.editPerson}
        />
      </div>
    );
  }
}