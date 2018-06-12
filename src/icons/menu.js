import React    from 'react';
import BaseIcon from './base-button';

const defaultAnimation = 'butterfly';
const menuAnimations = {
  'butterfly':      ['tcon-menu--xbutterfly'],
  'minus':          ['tcon-menu--minus'],
  'x-cross':        ['tcon-menu--xcross'],
  'arrow-up':       ['tcon-menu--arrow', 'tcon-menu--arrowup'],
  'arrow-360-left': ['tcon-menu--arrow', 'tcon-menu--arrow360left'],
  'arrow-left':     ['tcon-menu--arrow', 'tcon-menu--arrowleft']
};

function MenuIcon(props) {
  return (
    <BaseIcon
      animations={menuAnimations}
      ariaLabel="toggle menu"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span
        aria-hidden="true"
        className='tcon-menu__lines'
      />
      <span className='tcon-visuallyhidden'>toggle menu</span>
    </BaseIcon>
  );
};

export default MenuIcon;
