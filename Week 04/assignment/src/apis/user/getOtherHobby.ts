import instance from '..';

const getOtherHobby = async (no: string | unknown) => {
  try {
    const res = await instance.get(`/user/${no}/hobby`);
    return res.data.result;
  } catch (err: any) {
    return err.response.data.code;
  }
};

export default getOtherHobby;
