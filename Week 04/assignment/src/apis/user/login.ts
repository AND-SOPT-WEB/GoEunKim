import instance from '..';

type LoginType = {
  username: string;
  password: string;
};

const login = async (loginData: LoginType) => {
  try {
    const res = await instance.post('/login', loginData);
    return res;
  } catch (err) {}
};

export default login;
