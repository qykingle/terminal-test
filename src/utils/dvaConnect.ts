/*
 * @Description: dva的connect封
 * @Date: 2020-12-11 15:29:08
 * @Author: qianqian
 */
import { FC } from 'react';
import { connect } from 'dva';

/**
 * @description: 为组件关联models
 * @param {FC} component 需要封装的组件
 * @param {string} models 需要关联的model
 * @return {*} 已经关联的新组件
 */
function dvaConnect(component: FC, models: string[]) {
  interface IState {
    [name: string]: string;
  }
  const mapStateToProps = (state: IState) => {
    const obj: IState = {};
    models.forEach(model => {
      obj[model] = state[model];
    });
    return obj;
  };
  return connect(mapStateToProps, undefined)(component) as FC;
}

export default dvaConnect;
