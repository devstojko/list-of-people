import React, { Component } from 'react';
import uuid from 'uuid';
import { Meteor } from 'meteor/meteor';

import PrivateHeader from './PrivateHeader';
import AddPerson from './components/AddPerson';
import PersonTable from './components/PersonTable';

import { Persons } from '../api/persons';

export default class Dashboard extends Component {

  state = {
    persons: [],
    person: {}
  }

  componentDidMount = () => {
    this.personsTracker = Tracker.autorun(() => {
      Meteor.subscribe('persons');
      const persons = Persons.find().fetch();
      this.setState({ persons });
    });
  }

  componentWillUnmount = () => {
    this.personsTracker.stop();
  }
  
  

  addPerson = e => {
    const { person } = this.state;
    e.preventDefault();
    Meteor.call('person.insert', person);
  }

  removePerson = _id => Meteor.call('person.remove', _id);

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