import instance from '..';

const getMyHobby = async () => {
  try {
    const res = await instance.get('/user/my-hobby');

    return res.data.result;
  } catch (err: any) {
    return err.response.data.code;
  }
};

export default getMyHobby;
