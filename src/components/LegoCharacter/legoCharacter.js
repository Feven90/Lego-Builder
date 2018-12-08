import $ from 'jquery';
import 'bootstrap';
import './legoCharacter.scss';
import partsData from '../data/partsData';

let getHeadUrl = '';
let getHeadName = '';
let getTorsoUrl = '';
let getTorsoName = '';
let getLegUrl = '';
let getLegName = '';
const getSavedLegoName = getHeadName + getTorsoName + getLegName;
const createDefaultLego = (part, divId, legoName) => {
  const newString = `<div class="justify-content-center">
  <div class="lego ${part.id}">
    <img class="lego-img rounded mx-auto d-block" src="${part.imageUrl}">
    </div>
    </div>`;
  const value = `${part.id}`;
  if (value.includes('head')) {
    getHeadUrl = `${part.imageUrl}`;
    getHeadName = `${part.name}`;
  }
  if (value.includes('torso')) {
    getTorsoUrl = `${part.imageUrl}`;
    getTorsoName = `${part.name}`;
  }
  if (value.includes('leg')) {
    getLegUrl = `${part.imageUrl}`;
    getLegName = `${part.name}`;
  }
  $(divId).html(newString);
  $(legoName).html(`<h2 class="text-center">${part.name}</h2>`);
};

const saveButtonStringBuilder = () => {
  const domString = `<div>
        <h2>${getHeadName}${getTorsoName}${getLegName}</h2>
            <img src="${getHeadUrl}" width="70px"><br/>
            <img src="${getTorsoUrl}" width="70px"><br/>
            <img src="${getLegUrl}" width="70px">
          </div>`;
  $('#saveLego').html(domString);
};
const saveLegoButton = () => {
  $('#save').click(() => {
    const saveLegoCharacter = {
      name: '',
      headImage: '',
      torsoImage: '',
      legsImage: '',
    };
    saveLegoCharacter.name = getSavedLegoName;
    saveLegoCharacter.headImage = getHeadUrl;
    saveLegoCharacter.torsoImage = getTorsoUrl;
    saveLegoCharacter.legsImage = getLegUrl;
    saveButtonStringBuilder();
    console.log(saveLegoCharacter);
  });
};
saveLegoButton();
// LEGO HEAD
const chooseHead = (clickedHead) => {
  partsData.loadClickedHead(clickedHead).then((data) => {
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
    createDefaultLego(data, '#head', '#head-name');
    getClickedHeadValue();
  }).catch((error) => {
    console.error('error', error);
  });
};

// LEGO TORSO
const chooseTorso = (clickedTorso) => {
  partsData.loadClickedTorso(clickedTorso).then((data) => {
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
    createDefaultLego(data, '#torso', '#torso-name');
    getClickedTorsoValue();
  }).catch((error) => {
    console.error('error', error);
  });
};

// LEGO LEG
const chooseLeg = (clickedLeg) => {
  partsData.loadClickedLeg(clickedLeg).then((data) => {
    $('#leg').hide();
    createDefaultLego(data[0], '#new-leg', '#leg-name');
  }).catch((error) => {
    console.error('error', error);
  });
};
const getClickedLegValue = () => {
  $('#submit-leg').on('click', () => {
    const clickedLeg = $('#lego-legs').val();
    chooseLeg(clickedLeg);
  });
};
const onPageLoadLeg = () => {
  partsData.loadLeg().then((data) => {
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
