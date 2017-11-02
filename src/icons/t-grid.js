import React from 'react';

const defaultAnimation = 'rearrange';
const gridAnimations = {
  'rearrange': 'tcon-grid tcon-grid--rearrange',
  'collapse':  'tcon-grid tcon-grid--collapse'
};

class GridIcon extends React.Component {
  constructor(props) {
    super(props);

    let isActive = props.isActive ? props.isActive : false;
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isActive: isActive
    }
  }

  handleClick(event) {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    const animation = gridAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.isActive ? 'tcon-transform' : '';

    return (
      <button className={`tcon ${animation} ${transform}`}
              aria-label="toggle grid"
              onClick={this.handleClick}>
        <span className="tcon-grid__item"
              aria-hidden="true"></span>
        <span className="tcon-visuallyhidden">toggle grid</span>
      </button>
    );
  }
}

export default GridIcon;
