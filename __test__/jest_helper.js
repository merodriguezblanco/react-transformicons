import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

global.shallow = shallow;
global.mount = mount;

console.error = (message) => {
  throw new Error(message);
};
