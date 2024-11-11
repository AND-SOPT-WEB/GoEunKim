import instance from '..';
import { AxiosError } from 'axios';

type EditType = {
  password?: string;
  hobby?: string;
};

const putEdit = async (prop: EditType) => {
  try {
    const res = await instance.put('/user', prop);
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

export default putEdit;
