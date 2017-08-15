import { Meteor } from 'meteor/meteor';

import { Persons } from '../imports/api/persons';
import '../imports/api/users';

Meteor.methods({
  'getPerson'() {
    const pipeline = [{ 
      $group: {
        _id: "$name",
        total: { $sum: "$fruitWeight"}
      }
    }];
  
    return Persons.aggregate(pipeline);
  }
})


/*
Meteor.startup(() => {
    
});
*/