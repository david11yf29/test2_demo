import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
};

describe('redux properties', () => {
  
})
