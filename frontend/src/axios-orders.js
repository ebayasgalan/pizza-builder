import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sandwich-builder.firebaseio.com/'
});

export default instance;