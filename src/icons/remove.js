import React  from 'react';
import styles from '../../vendor/transformicons.css';

const defaultAnimation = 'check';
const removeAnimations = {
  'check':         ['tcon-remove', 'tcon-remove--check'],
  'chevron-left':  ['tcon-remove', 'tcon-remove--chevron-left'],
  'chevron-right': ['tcon-remove', 'tcon-remove--chevron-right'],
  'chevron-down':  ['tcon-remove', 'tcon-remove--chevron-down'],
  'chevron-up':    ['tcon-remove', 'tcon-remove--chevron-up']
};

class RemoveIcon extends React.Component {
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
    const animation = removeAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.active ? 'tcon-transform' : '';
    const animationClass = animation.map(s => styles[`${s}`]).join(' ');
    const buttonClass = [styles.tcon, animationClass, styles[`${transform}`]].join(' ');

    return (
      <button
        aria-label="remove item"
        className={buttonClass}
        onClick={this.handleClick}
        {...this.props}
      >
        <span className={styles['tcon-visuallyhidden']}>remove item</span>
      </button>
    );
  };
};

export default RemoveIcon;
