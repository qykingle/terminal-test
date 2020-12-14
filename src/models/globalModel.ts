/*
 * @Description: 全局model
 * @Date: 2020-12-14 10:12:28
 * @Author: qianqian
 */
import { Model } from 'dva';
interface IPayload {
  [name: string]: any;
}

const global: Model = {
  namespace: 'global',
  state: {},
  effects: {},
  reducers: {
    setState(state, { payload }: IPayload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default global;
