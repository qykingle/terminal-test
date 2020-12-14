import dvaConnect from '@/utils/dvaConnect';
import React, { FC } from 'react';
import styles from './index.less';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Home: FC = props => {
  console.log(props);
  return (
    <div>
      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};

export default dvaConnect(Home, ['global']);
