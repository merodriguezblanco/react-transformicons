import React      from 'react';
import RemoveIcon from '../../src/icons/remove';
import renderer   from 'react-test-renderer';

describe('<RemoveIcon />', () => {

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
    const iconButton = mount(<RemoveIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon tcon-remove')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);
    expect($button.find('span').length).toEqual(1);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
