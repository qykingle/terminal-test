/*
 * @Description: loading组件
 * @Date: 2020-12-14 10:48:31
 * @Author: qianqian
 */
import React, { FC } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

const Loading: FC = () => {
  return (
    <LoadingWrapper>
      <Spin size="large" />
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  padding-top: 100;
  text-align: center;
`;

export default Loading;
