import PATH from './path'
import { defaultInstance } from './util'

const requestGet = async (path, instance) => {
  return await instance.get(path).then((res) => {
    return res.data;
  });
};

export const getSearch = (data) => {
  return requestGet(PATH.SEARCH, defaultInstance, data);
}