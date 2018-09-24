import { createSandbox } from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../src/app';

const box = createSandbox();
describe('<App />', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  afterEach(() => {
    box.restore();
  });

  it('exists', () => {
    expect(app).to.exist;
  });
});
