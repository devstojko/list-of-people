import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import AddPerson from './components/AddPerson';
import PersonTable from './components/PersonTable';
import PrivateHeader from './PrivateHeader';

import { Persons } from '../api/persons';

export default class Dashboard extends Component {

  state = {
    persons: [],
    person: {},
    total: []
  }

  componentDidMount = () => {
    this.personsTracker = Tracker.autorun(() => {
      Meteor.subscribe('persons');
      const persons = Persons.find(
        {}, { sort: ['fruitName', 'desc'] }).fetch();
      this.setState({ persons });

      Meteor.call('getPerson', (err, res) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({total: res})
        }
      });
      
      
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

  editPerson = (_id, dataType, value) => {
    Meteor.call('person.edit', _id, dataType, value);
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
      <div className="Dashboard">
        <PrivateHeader />
        <div className="Dashboard__content">
          <AddPerson 
           
          />
          <PersonTable 
            persons={this.state.persons}
            removePerson={this.removePerson}
            onPersonCellChange={this.editPerson}
          />
        </div>
      </div>
    );
  }
}