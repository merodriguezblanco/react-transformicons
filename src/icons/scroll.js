import React  from 'react';

function ScrollIcon(props) {
  return (
    <svg
      className='tcon-svgchevron'
      version="1.1"
      viewBox="0 0 30 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className='a3'
        d="M0,0l15,16L30,0"
      />
      <path
        className='a2'
        d="M0,10l15,16l15-16"
      />
      <path
        className='a1'
        d="M0,20l15,16l15-16"
      />
    </svg>
  );
};

export default ScrollIcon;
