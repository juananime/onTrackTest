import axios from 'axios';
import {ENDPOINT} from '@env';

const api = axios.create({
  baseURL: ENDPOINT,
});

export {api};
