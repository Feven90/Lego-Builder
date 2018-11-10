import 'bootstrap';
import './index.scss';
import pageLoad from './components/LegoCharacter/legoCharacter';

const initializeApp = () => {
  pageLoad.onPageLoadHead();
  pageLoad.onPageLoadTorso();
};
initializeApp();
