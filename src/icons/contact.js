import React  from 'react';
import styles from '../../vendor/transformicons.css';

const defaultAnimation = 'mail';
const contactAnimations = {
  'mail': ['tcon-mail--envelope'],
};

class ContactIcon extends React.Component {
  constructor(props) {
    super(props);

    const isActive = props.isActive ? props.isActive : false;
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      active: isActive
    };
  };

  handleClick(event) {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  };

  render() {
    const animation = contactAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.active ? 'tcon-transform' : '';
    const animationClass = animation.map(s => styles[`${s}`]).join(' ');
    const buttonClass = [styles.tcon, animationClass, styles[`${transform}`]].join(' ');

    return (
      <button
        aria-label="open mailbox"
        className={buttonClass}
        onClick={this.handleClick}
        {...this.props}
      >
        <span
          aria-hidden="true"
          className={styles['tcon-mail--envelope__flap']}
        />
        <span className={styles['tcon-visuallyhidden']}>open mailbox</span>
      </button>
    );
  };
};

export default ContactIcon;
