import React, { Component } from 'react';

import Person from './Person';
import Paper from './Paper';

export default function PersonTable ({ 
  persons,
  removePerson,
  onPersonCellChange
}) {

  const person = persons.map((person, index) => {
    return (
      <Person 
        key={person._id} 
        person={person} 
        index={index}
        removePerson={removePerson}
        onPersonCellChange={onPersonCellChange}
      />
    );
  });
     
  return (
    <Paper>
        <h3>Spisak poljoprivrednika</h3>
        <table className="PersonsTable" >
        <thead>
          <tr>
            <th>Ime i prezime</th>
            <th>JMBG / BPG</th>
            <th>Mesto</th>
            <th>Br. računa</th>
            <th>Težina KG</th>
            <th>Voće</th>
          </tr>
        </thead>
        <tbody>
          { person }
        </tbody>  
      </table>
    </Paper>
  );
}