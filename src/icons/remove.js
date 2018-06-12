import React  from 'react';
import BaseIcon from './base-button';

const defaultAnimation = 'check';
const removeAnimations = {
  'check':         ['tcon-remove', 'tcon-remove--check'],
  'chevron-left':  ['tcon-remove', 'tcon-remove--chevron-left'],
  'chevron-right': ['tcon-remove', 'tcon-remove--chevron-right'],
  'chevron-down':  ['tcon-remove', 'tcon-remove--chevron-down'],
  'chevron-up':    ['tcon-remove', 'tcon-remove--chevron-up']
};

function RemoveIcon (props) {
  return (
    <BaseIcon
      animations={removeAnimations}
      ariaLabel="remove item"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span className='tcon-visuallyhidden'>remove item</span>
    </BaseIcon>
  );
};

export default RemoveIcon;
