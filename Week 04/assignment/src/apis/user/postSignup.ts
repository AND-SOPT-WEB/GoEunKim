import instance from '..';
import { AxiosError } from 'axios';

type signupDataType = {
  username: string;
  password: string;
  hobby: string;
};

const postSignup = async (signupData: signupDataType) => {
  try {
    const res = await instance.post('/user', signupData);
    return res;
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

export default postSignup;
