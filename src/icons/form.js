import React    from 'react';
import BaseIcon from './base-button';

const defaultAnimation = 'search';
const formAnimations = {
  'search': ['tcon-search--xcross'],
};

function FormIcon(props) {
  return (
    <BaseIcon
      animations={formAnimations}
      ariaLabel="toggle search"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span
        aria-hidden="true"
        className='tcon-search__item'
      />
      <span className='tcon-visuallyhidden'>toggle search</span>
    </BaseIcon>
  );
};

export default FormIcon;
