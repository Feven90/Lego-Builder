import axios from 'axios';

const loadHead = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3006/heads')
    .then((data) => {
      resolve(data.data[0]);
    })
    .catch((error) => {
      reject(error);
    });
});
const loadClickedHead = clickedHead => new Promise((resolve, reject) => {
  axios.get('http://localhost:3006/heads')
    .then((data) => {
      const allHeads = data.data;
      const filterClickedHead = allHeads.filter(x => x.id === clickedHead);
      resolve(filterClickedHead);
    })
    .catch((error) => {
      reject(error);
    });
});
const loadTorso = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3006/torsos')
    .then((data) => {
      console.log(data.data[0]);
      resolve(data.data[0]);
    })
    .catch((error) => {
      reject(error);
    });
});
const loadClickedTorso = clickedTorso => new Promise((resolve, reject) => {
  axios.get('http://localhost:3006/torsos')
    .then((data) => {
      const allTorsos = data.data;
      const filterClickedTorso = allTorsos.filter(x => x.id === clickedTorso);
      resolve(filterClickedTorso);
    })
    .catch((error) => {
      reject(error);
    });
});
export default {
  loadHead,
  loadClickedHead,
  loadTorso,
  loadClickedTorso,
};
