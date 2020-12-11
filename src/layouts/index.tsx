import { IRouteComponentProps } from 'umi';
import React from 'react';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return <div>helloasdas {children}</div>;
}
