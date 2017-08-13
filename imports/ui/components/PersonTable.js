import React, { Component } from 'react';

import Person from './Person';

export default function PersonTable ({ persons, removePerson }) {

  const person = persons.map((person, index) => {
    return (
      <Person 
        key={person._id} 
        person={person} 
        removePerson={removePerson}/>
    );
  });
     
  return (<div>
      <table className="PersonsTable" >
        <thead>
          <tr>
            <th>Ime i prezime</th>
            <th>JMBG / BPG</th>
            <th>Mesto</th>
            <th>Br. računa</th>
            <th>Težina</th>
            <th>Voće</th>
          </tr>
        </thead>
        <tbody>
          { person }
        </tbody>  
      </table>
    </div>
  );
}