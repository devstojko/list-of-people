import React from 'react';

export default function Person({ person, removePerson }) {

  const {
    _id,
    name,
    upin,
    place,
    invoice,
    fruitWeight,
    fruitName
  } = person;

  return (
    <tr>
      <td>{name}</td>
      <td>{upin}</td>
      <td>{place}</td>
      <td>{invoice}</td>
      <td>{fruitWeight} kg</td>
      <td>{fruitName}</td>
      <td onClick={() => removePerson(_id)  } className="remove">x</td>
    </tr>
  );
}