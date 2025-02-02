import instance from '..';
import { AxiosError } from 'axios';
import { signupDataType } from '../../types/apiType';

const postSignup = async (prop: signupDataType) => {
  try {
    const res = await instance.post('/user', prop);
    instance.defaults.headers['token'] = res.data.result.token;
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
