import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

describe('Header Component', () => {
  it('Should render', () => {
    shallow(<Header />);
  });
});
