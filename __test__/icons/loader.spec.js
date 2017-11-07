import React      from 'react';
import LoaderIcon from '../../src/icons/loader';
import renderer   from 'react-test-renderer';

describe('<LoaderIcon />', () => {

  it('renders a loader icon', () => {
    const iconButton = renderer.create(<LoaderIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });
});
