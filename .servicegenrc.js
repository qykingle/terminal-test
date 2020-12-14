module.exports = {
  type: 'normal',
  rapUrl: 'http://api.tongyu.tech:3000',
  apiUrl:
    'http://api.tongyu.tech:38080/repository/get?id=28&token=HOgqpXoWF4aRBeHo8oqpJujPzLVSyhss',
  rapperPath: 'src/__apis__',
  typeRef:
    'import { ResponseData, ResultData, BCTAPIData } from "@ty-bct-utils/request";',
  resSelector:
    'type ResSelector<T extends BCTAPIData> = ResponseData<ResultData<T>>',
};
