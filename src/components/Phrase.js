import React from 'react'

export const Paragraph = (props) => {
  return (
  <p className={props.style}>{props.children}</p>
  );
}

export default Paragraph;
