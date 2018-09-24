import { createSandbox } from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import App from '../src/app.jsx';

const box = createSandbox();

describe('<App />', () => {
  let app;
  let mountedApp;
  let componentDidMount;
  let callOnMount;
  let instance;

  beforeEach(() => {
    callOnMount = box.stub(App.prototype, 'callOnMount');
    componentDidMount = box.spy(App.prototype, 'componentDidMount');
    app = shallow(<App />);
    mountedApp = mount(<App />);

    instance = app.instance();
  });

  afterEach(() => {
    box.restore();
  });

  it('exists', () => {
    expect(app).to.exist;
    expect(mountedApp).to.exist;
  });

  it('calls componentOnMount when shallowly or deeply rendered', () => {
    expect(componentDidMount).to.have.been.calledTwice;
  });

  describe('callOnMount', () => {
    it('is called with phrase on mount', () => {
      expect(callOnMount).to.have.been.calledWithExactly('I was called on mount!');
    });

    it('can be called with new phrase', () => {
      const PHRASE = 'new thing!';

      instance.callOnMount(PHRASE);

      expect(callOnMount).to.have.been.calledWithExactly(PHRASE);
    });
  });
});
