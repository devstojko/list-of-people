import React, { Component } from 'react';

export default class EditableCell extends Component { 

  state = {
    editing: false
  }

  isEditable = () => {
    this.setState(prevState => ({ editing: !prevState.editing }) );
  }

  render() {
    const {
      id, 
      cellType, 
      cellValue, 
      onPersonCellChange 
    } = this.props;
    return this.state.editing ?
      <td>
        <input
          ref={input => input && input.focus()}
          type='text'
          name={cellType}
          value={cellValue}
          onChange={ e => onPersonCellChange(id, cellType ,e.target.value)}
          onBlur={ e => this.isEditable() }
        />
      </td>
      : <td onClick={() => this.isEditable()}>{cellValue}</td>
  }
}