import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme from 'enzyme';
import sinonChai from 'sinon-chai';

const adapter = new Adapter();

Enzyme.configure({ adapter });

chai.use(chaiEnzyme());
chai.use(sinonChai);
