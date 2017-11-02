import React from 'react';

const defaultAnimation = 'butterfly';
const menuAnimations = {
  'butterfly':      'tcon-menu--xbutterfly',
  'minus':          'tcon-menu--minus',
  'x-cross':        'tcon-menu--xcross',
  'arrow-up':       'tcon-menu--arrow tcon-menu--arrowup',
  'arrow-360-left': 'tcon-menu--arrow tcon-menu--arrow360left',
  'arrow-left':     'tcon-menu--arrow tcon-menu--arrowleft'
};

class MenuIcon extends React.Component {
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
    const animation = menuAnimations[this.props.animation ? this.props.animation : defaultAnimation];
    const transform = this.state.isActive ? 'tcon-transform' : '';

    return (
      <button className={`tcon ${animation} ${transform}`}
              aria-label="toggle menu"
              onClick={this.handleClick}>
        <span className="tcon-menu__lines"
              aria-hidden="true"></span>
        <span className="tcon-visuallyhidden">toggle menu</span>
      </button>
    );
  }
}

export default MenuIcon;
