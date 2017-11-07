import React       from 'react';
import FormIcon    from '../../src/icons/form';
import renderer    from 'react-test-renderer';

describe('<FormIcon />', () => {

  it('when no animation renders a search icon', () => {
    const iconButton = renderer.create(<FormIcon />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when animation="search" renders a search', () => {
    const iconButton = renderer.create(<FormIcon animation="search" />);
    expect(iconButton.toJSON()).toMatchSnapshot();
  });

  it('when clicking on transformicon changes icon', () => {
    const iconButton = mount(<FormIcon />);
    const $button = iconButton.find('button');

    expect($button.hasClass('tcon tcon-search--xcross')).toEqual(true);
    expect($button.hasClass('tcon-transform')).toEqual(false);

    expect($button.find('span').length).toEqual(2);
    expect($button.find('span').first().hasClass('tcon-search__item')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });
});
