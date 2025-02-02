import instance from '..';
import { AxiosError } from 'axios';
import { LoginType } from '../../types/apiType';

const postLogin = async (prop: LoginType) => {
  try {
    const res = await instance.post('/login', prop);
    instance.defaults.headers['token'] = res.data.result.token; // Axios 인터셉터를 통한 헤더 토큰 갱신
    return res.data.result.token;
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

export default postLogin;
