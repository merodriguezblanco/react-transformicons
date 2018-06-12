import React    from 'react';
import BaseIcon from './base-button';

const defaultAnimation = 'rearrange';
const gridAnimations = {
  'rearrange': ['tcon-grid', 'tcon-grid--rearrange'],
  'collapse':  ['tcon-grid', 'tcon-grid--collapse']
};

function GridIcon(props) {
  return (
    <BaseIcon
      animations={gridAnimations}
      ariaLabel="toggle grid"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span
        aria-hidden="true"
        className='tcon-grid__item'
      />
      <span className='tcon-visuallyhidden'>toggle grid</span>
    </BaseIcon>
  );
};

export default GridIcon;
