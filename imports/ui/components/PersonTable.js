import React, { Component } from 'react';

export default function PersonTable ({persons}) {

  const list = persons.map(person => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>{person.upin}</td>
        <td>{person.place}</td>
        <td>{person.invoice}</td>
        <td>{person.fruitWeight} kg</td>
        <td>{person.fruitName}</td>
        <td onClick={this.onClick} className="remove">x</td>
      </tr>
    );
  });
    
  
    return (<div>
        <table className="PersonsList" >
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
            {list}
          </tbody>  
        </table>
      </div>
    );
}