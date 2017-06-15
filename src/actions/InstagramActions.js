import axios from 'axios';

import { FETCH_INITIAL_INSTAGRAM_DATA, FETCH_FURTHER_INSTAGRAM_DATA } from './types';

const INSTAGRAM_API_ACCESS_TOKEN = '557419713.1677ed0.0282a34e53b549eeab0253b8263cf587';
const USER_MEDIA_ACCESS_URL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=';


export const getInitialInstagramLocationData = () => {
  const url = `${USER_MEDIA_ACCESS_URL}${INSTAGRAM_API_ACCESS_TOKEN}`;
  const request = axios.get(url);
  //console.log(request);
  return {
    type: FETCH_INITIAL_INSTAGRAM_DATA,
    payload: request
  };
};

export const getFurtherInstagramLocationData = (url) => {
  const request = axios.get(url);
  return {
    type: FETCH_INITIAL_INSTAGRAM_DATA,
    payload: request
  };
};
