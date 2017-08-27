import React, { Component } from 'react';

import Person from './Person';

export default function PersonsTable ({ 
  persons,
  removePerson,
  onPersonCellChange,
  removeAllPersons
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
    <div className="PersonsTable">
      <h3>Spisak poljoprivrednika</h3>
      <table className="PersonsTable__table" >
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
      <div className="PersonsTable__cta">
        <button 
          className="btn btn--primary" 
          onClick={() => window.print() } >
            Stampaj spisak i izjave
        </button>
        
        <button 
          className="btn btn--danger"
          onClick={removeAllPersons}>
          Obrisi sve poljoprivrednike
        </button>
      </div>
    </div>
  );
}