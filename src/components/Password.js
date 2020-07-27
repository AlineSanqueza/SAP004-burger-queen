import React from 'react';

const Password = (props) => {
  return <input type='password' placeholder= {props.title} className={props.style} onChange={props.onChange}></input>
}

export default Password;
