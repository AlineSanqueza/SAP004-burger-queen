import React from 'react';

const Select = (props) => {
  return (
    <select className={props.style} onChange={props.onChange} defaultValue='occupation'>
      <option value='occupation' disabled> Sua ocupação </option>
      <option value='kitchen'> Cozinheiro </option>
      <option value='saloon'> Garçom </option>
    </select>
    /*<label>
      <input type='radio' value='kitchen'> Cozinheiro </input>
      <input type='radio' value='saloon'> Garçom </input>
    </label>*/
  );
}

export default Select;
