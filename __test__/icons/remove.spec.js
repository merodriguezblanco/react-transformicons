import React      from 'react';
import RemoveIcon from '../../src/icons/remove';
import renderer   from 'react-test-renderer';

describe('RemoveIcon', () => {

  it('when no animation renders a check remove', () => {
    const iconButton = renderer.create(<RemoveIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="check" renders a check remove', () => {
    const iconButton = renderer.create(<RemoveIcon animation="check" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="chevron-left" renders a chevron-left remove', () => {
    const iconButton = renderer.create(<RemoveIcon animation="chevron-left" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="chevron-right" renders a chevron-right remove', () => {
    const iconButton = renderer.create(<RemoveIcon animation="chevron-right" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="chevron-down" renders a chevron-down remove', () => {
    const iconButton = renderer.create(<RemoveIcon animation="chevron-down" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="chevron-up" renders a chevron-up remove', () => {
    const iconButton = renderer.create(<RemoveIcon animation="chevron-up" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = shallow(<RemoveIcon />);

    expect(iconButton.type()).toEqual('button')
    expect(iconButton.hasClass('tcon tcon-remove')).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
    expect(iconButton.find('span').length).toEqual(1);

    iconButton.simulate('click');

    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when missing isActive prop inits inactive transformicon', () => {
    const iconButton = shallow(<RemoveIcon />);

    expect(iconButton.state().active).toEqual(false)
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when isActive={true} renders an active transformicon', () => {
    const iconButton = shallow(<RemoveIcon isActive={true} />);

    expect(iconButton.state().active).toEqual(true)
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(false);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
  });
});
