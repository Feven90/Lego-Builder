import 'bootstrap';
import './index.scss';
import pageLoad from './components/LegoCharacter/legoCharacter';

const initializeApp = () => {
  pageLoad.onPageLoad();
};
initializeApp();
