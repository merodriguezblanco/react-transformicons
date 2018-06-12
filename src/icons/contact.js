import React    from 'react';
import BaseIcon from './base-button';

const defaultAnimation = 'mail';
const contactAnimations = {
  'mail': ['tcon-mail--envelope'],
};

function ContactIcon(props) {
  return (
    <BaseIcon
      animations={contactAnimations}
      ariaLabel="open mailbox"
      defaultAnimation={defaultAnimation}
      {...props}
    >
      <span
        aria-hidden="true"
        className="tcon-mail--envelope__flap"
      />
      <span className="tcon-visuallyhidden">open mailbox</span>
    </BaseIcon>
  );
};

export default ContactIcon;
