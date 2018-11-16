import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';
import partsData from '../data/partsData';

let getHeadUrl = '';
let getTorsoUrl = '';
let getLegUrl = '';
const createDefaultLego = (part, divId, legoName) => {
  const newString = `<div class="lego ${part.id}">
    <img class="lego-img" src="${part.imageUrl}">
    </div>`;
  const value = `${part.id}`;
  if (value.includes('head')) {
    getHeadUrl = `${part.imageUrl}`;
  }
  if (value.includes('torso')) {
    getTorsoUrl = `${part.imageUrl}`;
  }
  if (value.includes('leg')) {
    getLegUrl = `${part.imageUrl}`;
  }
  $(divId).html(newString);
  $(legoName).html(`${part.name}`);
};

const saveButtonStringBuilder = () => {
  const domString = `<div>
                    <img src="${getHeadUrl}" width="30px"><br/>
                    <img src="${getTorsoUrl}" width="30px"><br/>
                    <img src="${getLegUrl}" width="30px">
                  </div>`;
  $('#saveLego').html(domString);
};
const saveLegoButton = () => {
  $('#save').click(() => {
    const savedLegoArray = [];
    const saveLegoCharacter = {
      name: '',
      headImage: '',
      torsoImage: '',
      legsImage: '',
    };
    saveLegoCharacter.headImage = getHeadUrl;
    saveLegoCharacter.torsoImage = getTorsoUrl;
    saveLegoCharacter.legsImage = getLegUrl;
    savedLegoArray.push(saveLegoCharacter);
  });
  saveButtonStringBuilder();
};
saveLegoButton();
// LEGO HEAD
const chooseHead = (clickedHead) => {
  partsData.loadClickedHead(clickedHead).then((data) => {
    console.log(data[0]);
    $('#head').hide();
    createDefaultLego(data[0], '#new-head', '#head-name');
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
    createDefaultLego(data, '#head', '#head-name');
    getClickedHeadValue();
  }).catch((error) => {
    console.error('error', error);
  });
};

// LEGO TORSO
const chooseTorso = (clickedTorso) => {
  partsData.loadClickedTorso(clickedTorso).then((data) => {
    console.log(data[0]);
    $('#torso').hide();
    createDefaultLego(data[0], '#new-torso', '#torso-name');
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
    createDefaultLego(data, '#torso', '#torso-name');
    getClickedTorsoValue();
  }).catch((error) => {
    console.error('error', error);
  });
};

// LEGO LEG
const chooseLeg = (clickedLeg) => {
  partsData.loadClickedLeg(clickedLeg).then((data) => {
    console.log(data);
    $('#leg').hide();
    createDefaultLego(data[0], '#new-leg', '#leg-name');
  }).catch((error) => {
    console.error('error', error);
  });
};
const getClickedLegValue = () => {
  $('#submit-leg').on('click', () => {
    const clickedLeg = $('#lego-legs').val();
    console.log(clickedLeg);
    chooseLeg(clickedLeg);
  });
};
const onPageLoadLeg = () => {
  partsData.loadLeg().then((data) => {
    console.log(data);
    createDefaultLego(data, '#leg', '#leg-name');
    getClickedLegValue();
  }).catch((error) => {
    console.error('error', error);
  });
};
export default {
  onPageLoadHead,
  onPageLoadTorso,
  getClickedHeadValue,
  getClickedTorsoValue,
  onPageLoadLeg,
};
