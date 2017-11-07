import React       from 'react';
import GridIcon    from '../../src/icons/grid';
import renderer    from 'react-test-renderer';

describe('<GridIcon />', () => {

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
    const iconButton = mount(<GridIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon tcon-grid')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);

    expect($button.find('span').length).toEqual(2);
    expect($button.find('span').first().hasClass('tcon-grid__item')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
