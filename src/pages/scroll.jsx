/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid white', height: '1000px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
