import instance from '..';
import { AxiosError } from 'axios';

const getOthersHobby = async (no: string | unknown) => {
  try {
    const res = await instance.get(`/user/${no}/hobby`);
    return res.data.result;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const response = err.response;
      if (response) {
        return response.data.code;
      }
    }
    throw err;
  }
};

export default getOthersHobby;
