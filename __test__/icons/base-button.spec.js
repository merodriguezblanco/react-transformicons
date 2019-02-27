import React    from 'react';
import BaseIcon from '../../src/icons/base-button';
import renderer from 'react-test-renderer';

describe('<BaseIcon />', () => {

  const defaultAnimation = 'fake';
  const animations = {
    'fake': ['tcon-fake']
  };

  it('when missing prop "isActive" inits inactive transformicon', () => {
    const iconButton = shallow(
      <BaseIcon
        animations={animations}
        defaultAnimation={defaultAnimation}
      />
    );

    expect(iconButton.state().active).toEqual(false)
    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(false);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(true);
    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);
  });

  it('when isActive={true} renders an active transformicon', () => {
    const iconButton = shallow(
      <BaseIcon
        animations={animations}
        defaultAnimation={defaultAnimation}
        isActive={true}
      />
    );

    expect(iconButton.state().active).toEqual(true)
    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(true);

    iconButton.simulate('click');

    expect(iconButton.state().active).toEqual(false);
    expect(iconButton.find('button').hasClass('tcon-transform')).toEqual(false);
  });
});
