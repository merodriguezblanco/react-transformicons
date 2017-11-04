import React  from 'react';
import styles from '../../vendor/transformicons.css';

const defaultAnimation = 'butterfly';
const menuAnimations = {
  'butterfly':      ['tcon-menu--xbutterfly'],
  'minus':          ['tcon-menu--minus'],
  'x-cross':        ['tcon-menu--xcross'],
  'arrow-up':       ['tcon-menu--arrow', 'tcon-menu--arrowup'],
  'arrow-360-left': ['tcon-menu--arrow', 'tcon-menu--arrow360left'],
  'arrow-left':     ['tcon-menu--arrow', 'tcon-menu--arrowleft']
};

class MenuIcon extends React.Component {
  constructor(props) {
    super(props);

    const isActive = props.isActive ? props.isActive : false;
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isActive: isActive
    };
  };

  handleClick(event) {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    const animation = menuAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.isActive ? 'tcon-transform' : '';
    const animationClass = animation.map(s => styles[`${s}`]).join(' ');
    const buttonClass = [styles.tcon, animationClass, styles[`${transform}`]].join(' ');

    return (
      <button
        aria-label="toggle menu"
        className={buttonClass}
        onClick={this.handleClick}
        {...this.props}
      >
        <span
          aria-hidden="true"
          className={styles['tcon-menu__lines']}
        />
        <span className={styles['tcon-visuallyhidden']}>toggle menu</span>
      </button>
    );
  };
};

export default MenuIcon;
