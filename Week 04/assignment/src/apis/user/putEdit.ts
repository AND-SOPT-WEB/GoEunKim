import instance from '..';

type EditType = {
  password?: string;
  hobby?: string;
};

const putEdit = async (prop: EditType) => {
  try {
    const res = await instance.put('/user', prop);
    return res;
  } catch (err: any) {
    return err;
  }
};

export default putEdit;
