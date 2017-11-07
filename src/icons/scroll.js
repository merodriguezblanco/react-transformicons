import React  from 'react';
import styles from '../../vendor/transformicons.css';

function ScrollIcon(props) {
  return (
    <svg
      className={styles['tcon-svgchevron']}
      version="1.1"
      viewBox="0 0 30 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.a3}
        d="M0,0l15,16L30,0"
      />
      <path
        className={styles.a2}
        d="M0,10l15,16l15-16"
      />
      <path
        className={styles.a1}
        d="M0,20l15,16l15-16"
      />
    </svg>
  );
};

export default ScrollIcon;
