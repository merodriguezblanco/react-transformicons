import React    from 'react';
import BaseIcon from './base-button';

const defaultAnimation = 'minus';
const addAnimations = {
  'minus': ['tcon-plus', 'tcon-plus--minus'],
  'check': ['tcon-plus', 'tcon-plus--check']
};

function AddIcon(props) {
  return (
    <BaseIcon
      animations={addAnimations}
      ariaLabel="add item"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span className='tcon-visuallyhidden'>add item</span>
    </BaseIcon>
  );
};

export default AddIcon;
