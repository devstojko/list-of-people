import React from 'react';
import PropTypes, { 
  string,
  number,
  func
} from 'prop-types';

FormGroup.propTypes = {
  name: string.isRequired,
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  controlFunc: func.isRequired,
  placeholder: string,
  title: string.isRequired,
  content: PropTypes.oneOfType([
    string,
    number
  ]).isRequired,
  typeOfData: PropTypes.oneOf([
    'string',
    'number'
  ])
};

export default function FormGroup({
  name,
  title,
  inputType,
  content,
  controlFunc,
  placeholder
}) {

  return (
    <div className="FormGroup">
      <label htmlFor={name} className="FormGroup__label">{title}</label>
      <input 
        className="FormGroup__input"
        id={name}
        name={name}
        type={inputType}
        value={content}
        onChange={(e) => controlFunc(name, e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}