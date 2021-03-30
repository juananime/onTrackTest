import {api} from '../api';

const API_BOOK = '/api/book';

const getBookDetailAPI = async (id: number) => {
  try {
    return await api.get(`${API_BOOK}/${id}`);
  } catch (error) {
    throw error;
  }
};

export {getBookDetailAPI};
