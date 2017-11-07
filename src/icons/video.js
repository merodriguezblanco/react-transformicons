import React    from 'react';
import BaseIcon from './base-button';
import styles   from '../../vendor/transformicons.css';

const defaultAnimation = 'play';
const videoAnimations = {
  'play': ['tcon-vid--play'],
};

function VideoIcon(props) {
  return (
    <BaseIcon
      animations={videoAnimations}
      ariaLabel="play video"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span className={styles['tcon-visuallyhidden']}>play video</span>
    </BaseIcon>
  );
};

export default VideoIcon;
