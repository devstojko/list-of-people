import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import AddPerson from './components/AddPerson';
import PersonTable from './components/PersonTable';
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
        Session.set('people', res);
      });

      this.getSes = Session.get('people');
          
      this.setState({
        persons
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
    const { persons } = this.state;

    if (this.getSes !== undefined) {
      this.renderTotal = this.getSes.map((item, i) => {
        return (
          <div key={i}>
            <p>{`Ime: ${item._id}`}</p>
            <p>{`Ukupna tezina: ${item.total}`}</p>
          </div>
        );
      })
    }

   

    return (
      <div className="Dashboard">
        <PrivateHeader />
        <div className="Dashboard__content">
          <AddPerson 
           
          />
          <PersonTable 
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