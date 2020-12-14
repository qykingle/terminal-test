/*
 * @Description: 封装一下请求
 * @Date: 2020-09-10 11:19:18
 * @Author: qianqian
 */
import request from '@/utils/request';
import { createFetch } from '@/__apis__/request';
import _ from 'lodash';
import * as commonLib from '@ty-devops-tools/api-generator/runtime/commonLib'
// import { getToken } from '@/lib/utils/authority';

// 获得正确的URL
const getUrl = (options: commonLib.IUserFetchParams) => {
  const { url, extra } = options;
  if (extra && extra.mock) {
    return url;
  }
  let baseUrl = url.split('=')[0];
  baseUrl = baseUrl.startsWith('/') ? baseUrl : `/${baseUrl}`;
  return baseUrl;
};

// 统一获取接口数据
export const fetchData = createFetch(async options => {
  const { method, params, schemas, extra } = options;
  const body = {
    method: options.url.split('=')[1],
    params,
  };
  // debugger
  const url = getUrl(options);
  return request(url, {
    method,
    data: body,
    schemas,
    prefix: extra && extra.mock ? '' : extra?.prefix || '/api',
    // onCancelInterceptorsRequest,
  });
});
