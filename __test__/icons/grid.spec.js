import React       from 'react';
import GridIcon    from '../../src/icons/grid';
import renderer    from 'react-test-renderer';

describe('GridIcon', () => {

  it('when no animation renders a collapse grid', () => {
    const iconButton = renderer.create(<GridIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="rearrange" renders a rearrange grid', () => {
    const iconButton = renderer.create(<GridIcon animation="rearrange" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="collapse" renders a collapse grid', () => {
    const iconButton = renderer.create(<GridIcon animation="collapse" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = shallow(<GridIcon />);

    expect(iconButton.type()).toEqual('button')
    expect(iconButton.hasClass('tcon tcon-grid')).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    expect(iconButton.find('span').length).toEqual(2);
    expect(iconButton.find('span').first().hasClass('tcon-grid__item')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when missing isActive prop inits inactive transformicon', () => {
    const iconButton = shallow(<GridIcon />);

    expect(iconButton.state().active).toEqual(false)
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(true);
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);
  });

  it('when isActive={true} renders an active transformicon', () => {
    const iconButton = shallow(<GridIcon isActive={true} />);

    expect(iconButton.state().active).toEqual(true)
    expect(iconButton.hasClass('tcon-transform')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(false);
    expect(iconButton.hasClass('tcon-transform')).toEqual(false);
  });
});
