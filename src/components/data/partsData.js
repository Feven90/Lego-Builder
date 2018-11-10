import axios from 'axios';

const loadParts = () => new Promise((resolve, reject) => {
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

export default { loadParts, loadClickedHead };
