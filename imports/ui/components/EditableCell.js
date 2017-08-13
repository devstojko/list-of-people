import React from 'react';

export default function EditableCell({ 
  index, 
  cellType, 
  cellValue, 
  onPersonCellChange 
}) {
  
  return (
    <td>
      <input 
        type='text'
        name={cellType}
        value={cellValue}
        onChange={(e) => onPersonCellChange(index, cellType ,e.target.value)}
      />
    </td>
  );
}