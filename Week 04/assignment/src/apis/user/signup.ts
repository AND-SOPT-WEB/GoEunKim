import instance from '../';

type signupDataType = {
  username: string;
  password: string;
  hobby: string;
};

const signup = async (signupData: signupDataType) => {
  try {
    const res = await instance.post('/user', signupData);
    return res;
  } catch (err) {
    if (err) {
      throw err;
    }
  }
};

export default signup;
