import React from 'react';

const defaultAnimation = 'rearrange';
const gridAnimations = {
  'rearrange': 'tcon-grid tcon-grid--rearrange',
  'collapse':  'tcon-grid tcon-grid--collapse'
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

    return (
      <button
        aria-label="toggle grid"
        className={`tcon ${animation} ${transform}`}
        onClick={this.handleClick}
      >
        <span
          aria-hidden="true"
          className="tcon-grid__item"
        />
        <span className="tcon-visuallyhidden">toggle grid</span>
      </button>
    );
  };
};

export default GridIcon;
