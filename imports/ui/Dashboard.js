import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import AddPerson from './components/AddPerson';
import PersonTable from './components/PersonTable';
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
      value = Number(value)
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
          <h2>Spisak poljoprivrednika</h2>
          <PersonTable 
            persons={persons}
            removePerson={this.removePerson}
            onPersonCellChange={this.editPerson}
          />
          <div className="page-break"></div>
         {this.renderTotal}
        </div>
      </div>
    );
  }
}