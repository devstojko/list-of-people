import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import AddPerson from './components/AddPerson';
import PersonsTable from './components/PersonsTable';
import Statement from './components/Statement';
import PrivateHeader from './PrivateHeader';

import { Persons } from '../api/persons';

export default class Dashboard extends Component {

  state = {
    persons: [],
    total: []
  }

  componentDidMount = () => {
    this.personsTracker = Tracker.autorun(() => {

      Meteor.subscribe('persons');

      const persons = Persons.find(
        {}, { sort: ['fruitName', 'desc'] }).fetch();

      Meteor.call('getPerson', (err, res) => {
        if (err) {
          console.log(err);
        }
        Session.set('total', res);
      });
          
      this.setState({
        persons,
        total: Session.get('total')      
      });
    });
  }

  componentWillUnmount = () => {
    this.personsTracker.stop();
  } 

  removePerson = _id => Meteor.call('person.remove', _id);

  editPerson = (_id, dataType, value) => {

    if (dataType === 'fruitWeight') {
      const numbers = /^[0-9]+$/;
      if (numbers.test(value) || value === '') {
        value = Number(value)
      } else {
        return false;
      }
    }

    Meteor.call('person.edit', _id, dataType, value);
  }

  render() {
    const { persons, total } = this.state;

    if (total !== undefined) {
      this.renderTotal = total.map((item, i) => {
        return (
          <Statement key={i} person={item}/>
        );
      })
    }

    return (
      <div className="Dashboard">
        <PrivateHeader />
        <div className="Dashboard__content">
          <AddPerson />
          <PersonsTable 
            persons={persons}
            removePerson={this.removePerson}
            onPersonCellChange={this.editPerson}
          />
         {this.renderTotal}
        </div>
      </div>
    );
  }
}