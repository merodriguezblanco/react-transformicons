import React      from 'react';
import AddIcon    from '../../src/icons/add';
import renderer   from 'react-test-renderer';

describe('<AddIcon />', () => {

  it('when no animation renders a minus add', () => {
    const iconButton = renderer.create(<AddIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="minus" renders a minus add', () => {
    const iconButton = renderer.create(<AddIcon animation="minus" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="check" renders a check add', () => {
    const iconButton = renderer.create(<AddIcon animation="check" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = mount(<AddIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon tcon-plus')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);
    expect($button.find('span').length).toEqual(1);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
