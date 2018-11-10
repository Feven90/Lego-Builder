import $ from 'jquery';
import 'bootstrap';
import '../../index.scss';
import partsData from '../data/partsData';

const createDefaultLego = (part, divId) => {
  const newString = `<div class= "firstLego">
    <img class="lego-img" src="${part.imageUrl}">
    <h2>${part.name}</h2>
    </div>`;
  $(divId).html(newString);
};
const createNewLego = (part, divId) => {
  const newString = `<div class= "firstLego">
      <img class="lego-img" src="${part.imageUrl}">
      <h2>${part.name}</h2>
      </div>`;
  $(divId).html(newString);
};

const chooseHead = (clickedHead) => {
  partsData.loadClickedHead(clickedHead).then((data) => {
    console.log(data[0]);
    $('#head').hide();
    createNewLego(data[0], '#new-head');
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
const onPageLoad = () => {
  partsData.loadParts().then((data) => {
    console.log(data);
    createDefaultLego(data, '#head');
    getClickedHeadValue();
  }).catch((error) => {
    console.error('error', error);
  });
};
export default { onPageLoad, getClickedHeadValue, chooseHead };
