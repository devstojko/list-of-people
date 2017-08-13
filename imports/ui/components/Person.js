import React from 'react';

import EditableCell from './EditableCell';

export default function Person({ 
  person,
  index, 
  removePerson, 
  onPersonCellChange
 }) {

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
      <EditableCell
        index={index} 
        cellType={'name'}
        cellValue={name}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        index={index} 
        cellType={'upin'}
        cellValue={upin}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        index={index} 
        cellType={'place'}
        cellValue={place}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        index={index} 
        cellType={'invoice'}
        cellValue={invoice}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        index={index} 
        cellType={'fruitWeight'}
        cellValue={fruitWeight}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        index={index} 
        cellType={'fruitName'}
        cellValue={fruitName}
        onPersonCellChange={onPersonCellChange}
      />
      <td onClick={() => removePerson(_id)  } className="remove">x</td>
    </tr>
  );
}