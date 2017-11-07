import React    from 'react';
import MenuIcon from '../../src/icons/menu';
import renderer from 'react-test-renderer';

describe('<MenuIcon />', () => {

  it('when no animation renders a butterfly menu', () => {
    const iconButton = renderer.create(<MenuIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="minus" renders a minus menu', () => {
    const iconButton = renderer.create(<MenuIcon animation="minus" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="x-cross" renders a x-cross menu', () => {
    const iconButton = renderer.create(<MenuIcon animation="x-cross" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="arrow-up" renders an arrow-up menu', () => {
    const iconButton = renderer.create(<MenuIcon animation="arrow-up" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="arrow-360-left" renders a arrow-360-left menu', () => {
    const iconButton = renderer.create(<MenuIcon animation="arrow-360-left" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="arrow-left" renders a arrow-left menu', () => {
    const iconButton = renderer.create(<MenuIcon animation="arrow-left" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = mount(<MenuIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);

    expect($button.find('span').length).toEqual(2);
    expect($button.find('span').first().hasClass('tcon-menu__lines')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
