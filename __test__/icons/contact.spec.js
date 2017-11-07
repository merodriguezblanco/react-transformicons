import React       from 'react';
import ContactIcon from '../../src/icons/contact';
import renderer    from 'react-test-renderer';

describe('<ContactIcon />', () => {

  it('when no animation renders an email', () => {
    const iconButton = renderer.create(<ContactIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="email" renders an email', () => {
    const iconButton = renderer.create(<ContactIcon animation="mail" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = mount(<ContactIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon tcon-mail--envelope')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);
    expect($button.find('span').length).toEqual(2);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
