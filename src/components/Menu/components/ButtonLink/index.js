import React from 'react';

function ButtonLink(props) {
  // props => { className; "Do que alguem passar", href:"/"}
  return (
    <a href={props.href} className={props.className}>

      {props.children}
    </a>

  );
}

export default ButtonLink;
