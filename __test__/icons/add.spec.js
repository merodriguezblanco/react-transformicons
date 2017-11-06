import React       from 'react';
import AddIcon    from '../../src/icons/add';
import renderer    from 'react-test-renderer';

describe('AddIcon', () => {

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
    const iconButton = shallow(<AddIcon />);

    expect(iconButton.type()).toEqual('button')
    expect(iconButton.hasClass('tcon tcon-plus')).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
    expect(iconButton.find('span').length).toEqual(1);

    iconButton.simulate('click');

    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when missing isActive prop inits inactive transformicon', () => {
    const iconButton = shallow(<AddIcon />);

    expect(iconButton.state().active).toEqual(false)
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when isActive={true} renders an active transformicon', () => {
    const iconButton = shallow(<AddIcon isActive={true} />);

    expect(iconButton.state().active).toEqual(true)
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(false);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
  });
});
