import React     from 'react';
import VideoIcon from '../../src/icons/video';
import renderer  from 'react-test-renderer';

describe('<VideoIcon />', () => {

  it('when no animation renders a play icon', () => {
    const iconButton = renderer.create(<VideoIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="play" renders a play icon', () => {
    const iconButton = renderer.create(<VideoIcon animation="play" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = mount(<VideoIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon tcon-vid--play')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);

    expect($button.find('span').length).toEqual(1);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
