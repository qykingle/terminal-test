import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { Style } from '@/constants/style';
import Color from '@/styles/color';
import { Tooltip } from 'antd';
import React from 'react';

import { ARROW_RIGHT } from '@/utils/resourcePath';

// 侧栏表格相同的样式
export const CommonColumnStyle = styled.div`
  font-size: ${Style.font14}px;
  width: ${Style.cellWidth}px;
  line-height: ${Style.cellLineHeight}px;
`;

// 侧栏表格标题样式
export const ColumnCellStyle = styled(CommonColumnStyle)`
  color: ${Color.colorTitle};
  background-color: ${Color.bgTabHeader};
  padding-left: ${Style.cellPaddingLeft}px;
  box-sizing: border-box;
  height: ${Style.cellHeight + 1}px;
`;

// 侧栏表格内容样式
export const ColumnValueStyle = styled(CommonColumnStyle)`
  color: ${Color.colorValue};
  background-color: ${Color.bgMain};
  /* box-sizing: border-box; */
  border-right: 1px solid #0c1029;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-top: 1px;
  height: ${Style.cellHeight}px;
`;

export const FloatDiv = styled.div`
  float: ${props => props.float};
`;

// 横向排列，内容居中
export const FlexRowStartCenter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;
export const FlexRowCenterCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

// 横向排列
export const FlexRowStartStart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

// 横向排列
export const FlexRowEndStart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: start;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  ${props =>
    props.style &&
    css`
      ${props.style}
    `}
`;

// 横向排列，内容居中
export const FlexRowBetweenCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  /* width: 60%; */
`;

export const FlexRowBetweenStart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  /* width: 60%; */
`;

export const FlexRowAroundCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
  /* width: 60%; */
`;

// 纵向排列，内容居中
export const FlexVerticalStartCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;
// 纵向排列，内容end
export const FlexVerticalStartEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;
// 纵向排列，内容靠前
export const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

// 纵向排列，内容靠前
export const FlexVerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

// 纵向排列，内容靠前
export const FlexVerticalCenterStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: ${props => props.width};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

export const PanelBgDiv = styled.div`
  background-color: ${Color.bgCard};
`;

// 自定义inputSearch样式
export const GlobalInputSearchStyle = createGlobalStyle`
  .inputSearch{
    .ant-input-search{
      .ant-input {
        background-color: ${Color.bgMain};
        color: ${Color.colorValue};
        border: 1px solid ${Color.bgMain};
      }
      .ant-input-suffix i {
        color: ${Color.colorHigh};
      }
    }
  }
`;

// 自定义tree样式
export const GlobalTreeStyle = createGlobalStyle`
  .tree{
    .disable-tree-node {
      /* position: absolute; */
      display: none
      /* visibility: none; */
      /* visibility:hidden; */
    }
    .ant-tree{
      i {
        color: ${Color.colorHigh};
      }
      .ant-tree-title{
        color: ${Color.colorTitle};
      }
      .ant-tree-node-content-wrapper {
        cursor: default;
      }
      .ant-tree-node-selected {
        background-color: ${Color.bgTabHeader} !important;
      }
      .ant-tree-node-content-wrapper {
        &:hover {
          background-color: ${Color.bgTabHeader} !important;
        }
      }
    }
  }
`;

// 自定义popup样式
export const GlobalPopupStyle = createGlobalStyle`
  .ant-popover-inner-content {
    background-color: ${Color.bgCard};
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 4px;
    .ant-popover-message {
      color: ${Color.colorTitle};

    }
    /* .ant-popover-message>i {
      display: none;
    }
    .ant-popover-message-title {
      padding-left: 0;
    } */
    ul {
      padding-inline-start: 0;
    }
    button:first-of-type {
      border: 1px solid ${Color.colorHigh};
      background-color: ${Color.bgTabHeader};
      color: ${Color.colorTitle};
      &:hover {
        background-color: ${Color.bgTableHover}
      }
    }
    button:last-of-type {
      background: linear-gradient(51deg,rgba(75,183,251,1),rgba(61,113,255,1));
    }
  }
  .ant-popover-arrow {
    background-color: ${Color.bgCard};
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.65)!important;
    border: 1px solid rgba(255, 255, 255, 0.16) !important;
    z-index: -1;

  }
  .ant-popover-inner {
    border-radius: 4px !important;
  }
  /* 自定义 */
  .customPopover {
    .ant-popover-inner-content {
      padding: 0px;
    }
  }
`;

// 自定义radio样式
export const GlobalRadioStyle = createGlobalStyle`
  .radio{
    .ant-radio-group, .ant-radio-wrapper {
      color: ${props => props.labelColor} !important;
    }
    .ant-radio-inner {
      background-color: ${Color.bgTabHeader};
      border:1px solid ${Color.colorHigh};
    }
  }
`;

// 自定义Tab样式
export const GlobalTabStyle = createGlobalStyle`
  .tab{
    .ant-tabs-tab-active.ant-tabs-tab {
      background-color: ${Color.bgCard} !important;
      color: ${Color.colorHigh}  !important;
      border: none !important;
      border-bottom: 1px solid ${Color.colorHigh} !important;
      /* &:hover {
        border: 1px solid ${Color.colorHigh} !important;
      } */
    }
    .ant-tabs-nav .ant-tabs-tab {
      &:hover {
        color: #fff;
        border: 1px solid ${Color.colorHigh};
        transition: all 0.5s ease;
      }
      margin-bottom: 6px;
      box-sizing: border-box;
      text-align: center;
      padding: 0;
      width: 100px;
      height: 32px;
      margin-right: 3px;
      line-height: 32px;
      color: ${Color.colorTitle}; 
      border-radius: 3px;
      border: 1px solid rgba(75, 183, 251, 0.3);
      background-color: ${Color.bgTabHeader};
    }
    .ant-tabs-nav.ant-tabs-nav-animated {
      padding-left: 1px;
      padding-bottom: 1px;
    }
    .ant-tabs-bar.ant-tabs-top-bar {
      border: none;
    }
    .ant-tabs-nav-scroll {
      white-space: normal;
    }
    .ant-tabs-ink-bar {
      background-color: ${Color.colorHigh};
      height: 0px;
    }
  }
`;
export const click = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(3px, 3px);
  }
`;

// 按钮点击效果
export const ClickStyle = styled.div`
  &:active {
    animation: ${click} 0.5s ease;
  }
  &:hover {
    box-shadow: 0 0 8px 0 rgba(68, 149, 253, 0.7) !important;
  }
`;
// 自定义上传样式
export const GlobalUploadStyle = createGlobalStyle`
  .upload {
    .ant-upload-list-item {
      color: ${Color.colorTitle};
      i {
        color: ${Color.colorHigh};
      }
      &:hover {
        color: #000;
        i {
          color: ${Color.colorHigh};
        }
      }
      /* background: linear-gradient(51deg,rgba(75,183,251,1),rgba(61,113,255,1)); */
    }
  }
`;

// 自定义alert样式
export const GlobalAlertStyle = createGlobalStyle`
  .ant-alert {
    border: none;
    background-color: ${Color.bgColorDateRange};
    color: ${Color.colorTitle};
    .ant-alert-close-icon .anticon-close {
      color: ${Color.colorTitle};
      &:hover {
        color: ${Color.colorHigh}
      }
    }
  }
`;

// 自定义通知样式
export const GlobalNotificationStyle = createGlobalStyle`
  .ant-notification {
    .ant-notification-notice, .ant-message-notice-content {
      background-color: ${Color.bgColorDateRange};
      padding: 10px 10px;
      color: ${Color.colorLabel};
      box-shadow: -4px 4px 10px rgba(16, 20, 40, 0.8);
      .ant-notification-notice-message {
        color: ${Color.colorTitle};
      }
      .ant-notification-notice-close {
        color: ${Color.colorHigh}
      }
    }
    .ant-badge-count {
      box-shadow: 0 0 0 0 !important;
    }
  }
`;

export const GlobalTabsActionIconStyle = createGlobalStyle`
  .ant-tabs-bar .ant-tabs-tab-btn-disabled{
    visibility: hidden;
  }
  .ant-tabs-tab-next-icon{
    i{
      display: none !important;
     }
    width: 14px;
    height: 14px;
    :after{
      display: inline-block;
      content:'';
      width: 100%;
      height: 100%;
      background: url(${ARROW_RIGHT})  no-repeat center center;
      border: solid 1px ${Color.colorHigh};
      border-radius: 50%;
    }
  }
  .ant-tabs-tab-prev-icon{
    i{
      display: none !important;
     }
    width: 14px;
    height: 14px;
    :after{
      display: inline-block;
      content:'';
      width: 100%;
      height: 100%;
      background: url(${ARROW_RIGHT})  no-repeat center center;
      border: solid 1px ${Color.colorHigh};
      border-radius: 50%;
      transform: rotate(180deg);
    }
  }
`;

// 水波纹效果
const sploosh = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(255, 114, 37, 0.7);
    background: rgba(255, 114, 37, 0.7);
  }
  100% {
    box-shadow: 0 0 0 30px rgba(255, 114, 37, 0);
    background: rgba(255, 114, 37, 0);
  }
`;
// 自定义点击波浪样式
export const GlobalClickEffectStyle = createGlobalStyle`
  .icon-tuya_huabanfuben {
    font-size: 32px;
    color: ${Color.colorValue};
    position: absolute;
    top: 60%;
    left: 50%;
    margin-left: -16px;
    /* transform: translate(-50%, -50%); */
    margin-top: -60px;
    z-index: 99999999999;
    cursor: default;
    /* right: -30px; */
    /* z-index: 999; */
  }
  .ty-dot {
    position: relative;
    height: 2px;
    width: 2px;
    border-radius: 100%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    animation: ${sploosh} 3s cubic-bezier(0.165, 0.84, 0.44, 1);
    background: transparent;
  }
`;
// 省略号，需要传参width
export const EllipsisDiv = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${props =>
    props.justifyContent &&
    css`
      text-align: ${props =>
        props.justifyContent === 'flex-start'
          ? 'left'
          : props =>
              props.justifyContent === 'flex-end'
                ? 'right'
                : props.align
                ? props.align
                : 'center'};
    `}
  ${props =>
    props.width &&
    css`
      max-width: ${props => props.width}px;
    `}
`;

// 省略号组件
export function generateEllipsisDiv(title, width, value, align = '') {
  return (
    <Tooltip title={title}>
      <EllipsisDiv align={align} width={width}>
        {value}
      </EllipsisDiv>
    </Tooltip>
  );
}

// 禁用导航栏
export const BanMenu = styled.div`
  width: 100%;
  height: ${props => (props.one ? 60 : 106)}px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  font-size: 24px;
  color: #fff;
  text-align: center;
  z-index: 99;
  padding-top: 10px;
  /* const navigationTip = document.createElement('div'); */
  /* navigationTip.style.cssText = */
  /* "width: 100%; height: 60px;background-color: rgba(0,0,0,.5); position:fixed; top: 0;left: 0;font-size: 24px; color: #fff;text-align: center;z-index: 999999; padding-top: 10px;"; */
  /* navigationTip.innerText = '新手引导时，暂不支持导航切换' */
  /* document.body.appendChild(navigationTip); */
`;
// // 自定义图表样式
// export const GlobalCanvasStyle = createGlobalStyle`
//  canvas {
//   width: 100% !important;
//  }
// `;
// 自定义右上角提示tip
export const TipImg = styled.img.attrs({
  src: `${props => props.src}`,
})`
  width: 12px;
  height: 12px;
  position: relative;
  top: -4px;
  left: 1px;
  cursor: pointer;
`;

// 自定义白色ToolTip样式
export const GlobalToolTipStyle = createGlobalStyle`
  .tool-tip {
    .ant-tooltip-inner {
      background-color: #ffffffe6;
      /* opacity: .8; */
      color: #000;
    }
    .ant-tooltip-arrow {
      border-top-color: #ffffffe6;
    }
  }
`;

// 自定义Modal样式
export const GlobalModalStyle = createGlobalStyle`
  .tool-tip {
    .ant-tooltip-inner {
      background-color: #ffffffe6;
      color: #000;
    }
    .ant-tooltip-arrow {
      border-top-color: #ffffffe6;
    }
  }
`;

// 报价结构表格样式
export const TTableStyle = {
  font14: 14,
  fontPFR: 'PingFang-SC-Regular',
  fontPFM: 'PingFang-SC-Medium',
  cellWidth: 150, // 侧栏Cell宽度
  cellHeight: 31.99, // 侧栏Cell高度
  cellLineHeight: 31.99, // 侧栏Cell行高
  cellPaddingLeft: 12, // 侧栏padding
};

// 竖线
export const Divider = styled.span`
  display: inline-block;
  height: ${props => props.height || 10}px;
  width: 1px;
  background-color: ${Color.colorCalendarBorder};
  margin: 0 ${props => props.margin || 5}px;
`;

export const HighDiv = styled.div`
  color: ${Color.colorHigh};
  cursor: pointer;
`;
