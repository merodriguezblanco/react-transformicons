import React       from 'react';
import ScrollIcon  from '../../src/icons/scroll';
import renderer    from 'react-test-renderer';

describe('<ScrollIcon />', () => {

  it('renders a scroll icon', () => {
    const iconButton = renderer.create(<ScrollIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });
});
