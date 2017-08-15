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
  ]).isRequired
};

export default function FormGroup(props) {
  const {
    name,
    title,
    inputType,
    content,
    controlFunc,
    placeholder
  } = props;
  return (
    <div className="FormGroup">
      <label htmlFor={name} className="FormGroup__label">{title}</label>
      <input 
        className="FormGroup__input"
        name={name}
        type={inputType}
        value={content}
        onChange={(e) => controlFunc(name, e.target.value)}
        placeholder={placeholder} />
    </div>
  );
}