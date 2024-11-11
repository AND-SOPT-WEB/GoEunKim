import instance from '..';

type LoginType = {
  username: string;
  password: string;
};

const postLogin = async (loginData: LoginType) => {
  try {
    const res = await instance.post('/login', loginData);
    return res.data.result.token;
  } catch (err: any) {
    return err.response.data.code;
  }
};

export default postLogin;
