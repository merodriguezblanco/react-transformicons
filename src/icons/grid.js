import React  from 'react';
import styles from '../../vendor/transformicons.css';

const defaultAnimation = 'rearrange';
const gridAnimations = {
  'rearrange': ['tcon-grid', 'tcon-grid--rearrange'],
  'collapse':  ['tcon-grid', 'tcon-grid--collapse']
};

class GridIcon extends React.Component {
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
    const animation = gridAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.isActive ? 'tcon-transform' : '';
    const animationClass = animation.map(s => styles[`${s}`]).join(' ');
    const buttonClass = [styles.tcon, animationClass, styles[`${transform}`]].join(' ');

    return (
      <button
        aria-label="toggle grid"
        className={buttonClass}
        onClick={this.handleClick}
      >
        <span
          aria-hidden="true"
          className={styles['tcon-grid__item']}
        />
        <span className={styles['tcon-visuallyhidden']}>toggle grid</span>
      </button>
    );
  };
};

export default GridIcon;
