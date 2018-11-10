import $ from 'jquery';
import 'bootstrap';
import '../../index.scss';
import './legoCharacter.scss';
import partsData from '../data/partsData';

const createDefaultLego = (part, divId) => {
  const newString = `<div class= "lego">
    <img class="lego-img" src="${part.imageUrl}">
    </div>`;
  $(divId).html(newString);
};
const createLegoName = (part, divId) => {
  const newName = `<div>
  <h2>${part.name}</h2>
  </div>`;
  $(divId).append(newName);
};
// const createNewLego = (part, divId) => {
//   const newString = `<div class= "firstLego">
//       <img class="lego-img" src="${part.imageUrl}">
//       <h2>${part.name}</h2>
//       </div>`;
//   $(divId).html(newString);
// };

// const createDefaultTorso = (part, divId) => {
//   const newString = `<div class= "firstLego">
//       <img class="lego-img" src="${part.imageUrl}">
//       <h2>${part.name}</h2>
//       </div>`;
//   $(divId).html(newString);
// };
// const createNewTorso = (part, divId) => {
//   const newString = `<div class= "firstLego">
//         <img class="lego-img" src="${part.imageUrl}">
//         <h2>${part.name}</h2>
//         </div>`;
//   $(divId).html(newString);
// };
// LEGO HEAD
const chooseHead = (clickedHead) => {
  partsData.loadClickedHead(clickedHead).then((data) => {
    console.log(data[0]);
    $('#head').hide();
    createDefaultLego(data[0], '#new-head');
    createLegoName(data[0], '.lego-name');
  }).catch((error) => {
    console.error('error', error);
  });
};
const getClickedHeadValue = () => {
  $('#submit').on('click', () => {
    const clickedHead = $('#lego-heads').val();
    chooseHead(clickedHead);
  });
};
const onPageLoadHead = () => {
  partsData.loadHead().then((data) => {
    console.log(data);
    createDefaultLego(data, '#head');
    getClickedHeadValue();
  }).catch((error) => {
    console.error('error', error);
  });
};
const chooseTorso = (clickedTorso) => {
  partsData.loadClickedTorso(clickedTorso).then((data) => {
    console.log(data[0]);
    $('#torso').hide();
    createDefaultLego(data[0], '#new-torso');
  }).catch((error) => {
    console.error('error', error);
  });
};
const getClickedTorsoValue = () => {
  $('#submit-torso').on('click', () => {
    const clickedTorso = $('#lego-torsos').val();
    chooseTorso(clickedTorso);
  });
};
const onPageLoadTorso = () => {
  partsData.loadTorso().then((data) => {
    console.log(data);
    createDefaultLego(data, '#torso');
    getClickedTorsoValue();
  }).catch((error) => {
    console.error('error', error);
  });
};
export default {
  onPageLoadHead,
  onPageLoadTorso,
  getClickedHeadValue,
  getClickedTorsoValue,
};
