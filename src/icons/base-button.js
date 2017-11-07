import React  from 'react';
import styles from '../../vendor/transformicons.css';

class BaseIconButton extends React.Component {
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
    const animation = this.props.animations[this.props.animation ? this.props.animation : this.props.defaultAnimation];
    const transform = this.state.active ? 'tcon-transform' : '';
    const animationClass = animation.map(s => styles[`${s}`]).join(' ');
    const buttonClass = [styles.tcon, animationClass, styles[`${transform}`]].join(' ');

    return (
      <button
        aria-label={this.props.ariaLabel}
        className={buttonClass}
        onClick={this.handleClick}
      >
        {this.props.children}
      </button>
    );
  };
};

export default BaseIconButton;
