import React  from 'react';
import styles from '../../vendor/transformicons.css';

function LoaderIcon(props) {
  return (
    <span
      aria-label="loading"
      className='tcon-loader--spinner360'
    >
      <span className='tcon-visuallyhidden'>loading</span>
    </span>
  );
};

export default LoaderIcon;
