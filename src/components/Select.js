import React from 'react';

const Select = (props) => {
  return (
    <select className={props.style} onChange={props.onChange} defaultValue='occupation'>
      <option value='occupation' disabled> Sua ocupação </option>
      <option value='true'> Cozinheiro </option>
      <option value='false'> Garçom </option>
    </select>
  );
}

export default Select;
