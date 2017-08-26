import { Meteor } from 'meteor/meteor';

import { Persons } from '../imports/api/persons';
import '../imports/api/users';


Meteor.methods({
  'getPerson'() {

    const pipeline = [
      { $match: { userId: this.userId }},
      { $group: { 
          _id: {
            upin: "$upin", 
            fruitName: "$fruitName"
          },
          fruitWeight: { $sum: "$fruitWeight"},
          invoice: { $push: "$invoice" },
          name: { $first: "$name"},
          place: { $first: "$place" },
          upin: { $first: "$upin" },
          fruitName: {$first: "$fruitName" }
        }
      }
    ];
    // stop here
    return Persons.aggregate(pipeline);  

  }
});