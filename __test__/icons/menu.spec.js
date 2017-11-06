import React    from 'react';
import MenuIcon from '../../src/icons/menu';
import renderer from 'react-test-renderer';

describe('MenuIcon', () => {

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
    const iconButton = shallow(<MenuIcon />);

    expect(iconButton.type()).toEqual('button')
    expect(iconButton.hasClass('tcon')).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    expect(iconButton.find('span').length).toEqual(2);
    expect(iconButton.find('span').first().hasClass('tcon-menu__lines')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when missing isActive prop inits inactive transformicon', () => {
    const iconButton = shallow(<MenuIcon />);

    expect(iconButton.state().active).toEqual(false)
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when isActive={true} renders an active transformicon', () => {
    const iconButton = shallow(<MenuIcon isActive={true} />);

    expect(iconButton.state().active).toEqual(true)
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(false);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
  });
});
