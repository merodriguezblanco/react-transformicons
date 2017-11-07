import React  from 'react';
import styles from '../../vendor/transformicons.css';

function LoaderIcon(props) {
  return (
    <span
      aria-label="loading"
      className={styles['tcon-loader--spinner360']}
    >
      <span className={styles['tcon-visuallyhidden']}>loading</span>
    </span>
  );
};

export default LoaderIcon;
