import React       from 'react';
import ContactIcon from '../../src/icons/contact';
import renderer    from 'react-test-renderer';

describe('ContactIcon', () => {

  it('when no animation renders an email', () => {
    const iconButton = renderer.create(<ContactIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="email" renders an email', () => {
    const iconButton = renderer.create(<ContactIcon animation="mail" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = shallow(<ContactIcon />);

    expect(iconButton.type()).toEqual('button')
    expect(iconButton.hasClass('tcon tcon-mail--envelope')).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
    expect(iconButton.find('span').length).toEqual(2);

    iconButton.simulate('click');

    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when missing isActive prop inits inactive transformicon', () => {
    const iconButton = shallow(<ContactIcon />);

    expect(iconButton.state().active).toEqual(false)
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when isActive={true} renders an active transformicon', () => {
    const iconButton = shallow(<ContactIcon isActive={true} />);

    expect(iconButton.state().active).toEqual(true)
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(false);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
  });
});
