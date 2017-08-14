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
        id={_id} 
        cellType={'name'}
        cellValue={name}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        id={_id} 
        cellType={'upin'}
        cellValue={upin}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        id={_id} 
        cellType={'place'}
        cellValue={place}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        id={_id} 
        cellType={'invoice'}
        cellValue={invoice}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        id={_id} 
        cellType={'fruitWeight'}
        cellValue={fruitWeight}
        onPersonCellChange={onPersonCellChange}
      />
      <EditableCell
        id={_id} 
        cellType={'fruitName'}
        cellValue={fruitName}
        onPersonCellChange={onPersonCellChange}
      />
      <td onClick={() => removePerson(_id)  } className="remove">x</td>
    </tr>
  );
}