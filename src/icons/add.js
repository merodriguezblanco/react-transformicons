import React  from 'react';
import styles from '../../vendor/transformicons.css';

const defaultAnimation = 'minus';
const addAnimations = {
  'minus': ['tcon-plus', 'tcon-plus--minus'],
  'check': ['tcon-plus', 'tcon-plus--check']
};

class AddIcon extends React.Component {
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
    const animation = addAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.active ? 'tcon-transform' : '';
    const animationClass = animation.map(s => styles[`${s}`]).join(' ');
    const buttonClass = [styles.tcon, animationClass, styles[`${transform}`]].join(' ');

    return (
      <button
        aria-label="add item"
        className={buttonClass}
        onClick={this.handleClick}
        {...this.props}
      >
        <span className={styles['tcon-visuallyhidden']}>add item</span>
      </button>
    );
  };
};

export default AddIcon;
