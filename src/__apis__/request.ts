/* md5: 422c177de881e798970e28e372435a38 */
/* Rap仓库id: 28 */
/* Rapper版本: 1.3.0 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://api.tongyu.tech:3000/repository/editor?id=28
 */

import * as commonLib from '@ty-devops-tools/api-generator/runtime/commonLib'
import {ResponseData, ResultData, BCTAPIData} from '@ty-bct-utils/request'

export interface IModels {
  /**
   * 接口名：台账文本导入
   * Rap 地址: http://api.tongyu.tech:3000/repository/editor?id=28&mod=88&itf=222
   */
  'POST/api/rpc=textTransformToTerminalTextTransformTradeDTO': {
    Req: {
      /**
       * 台账文本信息，包含交易对手名称、标的代码、期权类型、期限、名义金规模、(前面5个参数为必传，后端有判断)成交价、进场方式、期权费
       */
      text: string
    }
    Res: {
      jsonrpc?: string
      id?: string
      result?: {
        /**
         * 交易对手机构UUID
         */
        counterPartyId?: string
        /**
         * 各腿具体信息
         */
        rfqPositions?: {
          /**
           * 期权类型
           */
          exerciseType?: string
          /**
           * 是否年化
           */
          annualized?: boolean
          /**
           * 买卖方向
           */
          direction?: string
          /**
           * 涨跌方向
           */
          optionType?: string
          /**
           * 参与率
           */
          participationRate?: number
          /**
           * 行权价
           */
          strike?: number
          /**
           * 行权价类型：PERCENT百分比
           */
          strikeType?: string
          /**
           * 期限
           */
          termStr?: string
          /**
           * 名义金规模
           */
          notionalAmount?: number
          /**
           * 名义金规模类型
           */
          notionalAmountType?: string
          /**
           * 期初价格
           */
          initialSpot?: number
          /**
           * 入场规则
           */
          orderStrategyType?: string
          /**
           * 期权费
           */
          premium?: number
          /**
           * 期权费类型：PERCENT百分比
           */
          premiumType?: string
          /**
           * 标的物代码
           */
          underlyerInstrumentId?: string
        }[]
      }
    }
  }

  /**
   * 接口名：示例接口
   * Rap 地址: http://api.tongyu.tech:3000/repository/editor?id=28&mod=94&itf=248
   */
  'GET/example/1600912744094': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string
    }
    Res: {
      /**
       * 字符串属性示例
       */
      string?: string
      /**
       * 数字属性示例
       */
      number?: number
      /**
       * 布尔属性示例
       */
      boolean?: boolean
      /**
       * 正则属性示例
       */
      regexp?: string
      /**
       * 函数属性示例
       */
      function?: string
      /**
       * 数组属性示例
       */
      array?: {
        /**
         * 数组元素示例
         */
        foo?: number
        /**
         * 数组元素示例
         */
        bar?: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items?: any[]
      /**
       * 对象属性示例
       */
      object?: {
        /**
         * 对象属性示例
         */
        foo?: number
        /**
         * 对象属性示例
         */
        bar?: string
      }
      /**
       * 占位符示例
       */
      placeholder?: string
    }
  }

  /**
   * 接口名：lcmWorkflowEvent
   * Rap 地址: http://api.tongyu.tech:3000/repository/editor?id=28&mod=94&itf=249
   */
  'POST/xxxx/lcmWorkflowEventBatchTrigger': {
    Req: {}
    Res: {}
  }
}

type ReqSelector<T> = T

type ResSelector<T extends BCTAPIData> = ResponseData<ResultData<T>>

export interface IResponseTypes {
  'POST/api/rpc=textTransformToTerminalTextTransformTradeDTO': ResSelector<
    IModels['POST/api/rpc=textTransformToTerminalTextTransformTradeDTO']['Res']
  >
  'GET/example/1600912744094': ResSelector<IModels['GET/example/1600912744094']['Res']>
  'POST/xxxx/lcmWorkflowEventBatchTrigger': ResSelector<IModels['POST/xxxx/lcmWorkflowEventBatchTrigger']['Res']>
}

export interface IRequestTypes {
  'POST/api/rpc=textTransformToTerminalTextTransformTradeDTO': ReqSelector<
    IModels['POST/api/rpc=textTransformToTerminalTextTransformTradeDTO']['Req']
  >
  'GET/example/1600912744094': ReqSelector<IModels['GET/example/1600912744094']['Req']>
  'POST/xxxx/lcmWorkflowEventBatchTrigger': ReqSelector<IModels['POST/xxxx/lcmWorkflowEventBatchTrigger']['Req']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption) {
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)

  return {
    /**
     * 接口名：台账文本导入
     * Rap 地址: http://api.tongyu.tech:3000/repository/editor?id=28&mod=88&itf=222
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/rpc=textTransformToTerminalTextTransformTradeDTO': (
      req?: IRequestTypes['POST/api/rpc=textTransformToTerminalTextTransformTradeDTO'],
      extra?: commonLib.IExtra
    ) => {
      const schemas: {
        request: commonLib.JSONSchema4
        response: commonLib.JSONSchema4
      } = {
        request: {
          type: 'object',
          properties: {
            text: {
              type: 'string',
              additionalProperties: false,
              required: [],
              description:
                '台账文本信息，包含交易对手名称、标的代码、期权类型、期限、名义金规模、(前面5个参数为必传，后端有判断)成交价、进场方式、期权费',
            },
          },
          additionalProperties: false,
          required: ['text'],
        },
        response: {
          type: 'object',
          properties: {
            jsonrpc: {type: 'string', additionalProperties: false, required: []},
            id: {type: 'string', additionalProperties: false, required: []},
            result: {
              type: 'object',
              properties: {
                counterPartyId: {
                  type: 'string',
                  additionalProperties: false,
                  required: [],
                  description: '交易对手机构UUID',
                },
                rfqPositions: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      exerciseType: {
                        type: 'string',
                        additionalProperties: false,
                        required: [],
                        description: '期权类型',
                      },
                      annualized: {type: 'boolean', additionalProperties: false, required: [], description: '是否年化'},
                      direction: {type: ['string'], additionalProperties: false, required: [], description: '买卖方向'},
                      optionType: {type: 'string', additionalProperties: false, required: [], description: '涨跌方向'},
                      participationRate: {
                        type: 'number',
                        additionalProperties: false,
                        required: [],
                        description: '参与率',
                      },
                      strike: {type: 'number', additionalProperties: false, required: [], description: '行权价'},
                      strikeType: {
                        type: 'string',
                        additionalProperties: false,
                        required: [],
                        description: '行权价类型：PERCENT百分比',
                      },
                      termStr: {type: 'string', additionalProperties: false, required: [], description: '期限'},
                      notionalAmount: {
                        type: 'number',
                        additionalProperties: false,
                        required: [],
                        description: '名义金规模',
                      },
                      notionalAmountType: {
                        type: 'string',
                        additionalProperties: false,
                        required: [],
                        description: '名义金规模类型',
                      },
                      initialSpot: {type: 'number', additionalProperties: false, required: [], description: '期初价格'},
                      orderStrategyType: {
                        type: 'string',
                        additionalProperties: false,
                        required: [],
                        description: '入场规则',
                      },
                      premium: {type: 'number', additionalProperties: false, required: [], description: '期权费'},
                      premiumType: {
                        type: 'string',
                        additionalProperties: false,
                        required: [],
                        description: '期权费类型：PERCENT百分比',
                      },
                      underlyerInstrumentId: {
                        type: 'string',
                        additionalProperties: false,
                        required: [],
                        description: '标的物代码',
                      },
                    },
                    required: [],
                    additionalProperties: false,
                  },
                  additionalProperties: false,
                  required: [],
                  description: '各腿具体信息',
                },
              },
              additionalProperties: false,
              required: [],
            },
          },
          additionalProperties: false,
          required: [],
        },
      }

      return rapperFetch({
        url:
          extra && extra.mock
            ? 'http://api.tongyu.tech:38080/app/mock/data/222'
            : '/api/rpc=textTransformToTerminalTextTransformTradeDTO',
        method: 'POST',
        params: req,
        schemas,
        extra,
      }) as Promise<IResponseTypes['POST/api/rpc=textTransformToTerminalTextTransformTradeDTO']>
    },

    /**
     * 接口名：示例接口
     * Rap 地址: http://api.tongyu.tech:3000/repository/editor?id=28&mod=94&itf=248
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1600912744094': (req?: IRequestTypes['GET/example/1600912744094'], extra?: commonLib.IExtra) => {
      const schemas: {
        request: commonLib.JSONSchema4
        response: commonLib.JSONSchema4
      } = {
        request: {
          type: 'object',
          properties: {foo: {type: 'string', additionalProperties: false, required: [], description: '请求属性示例'}},
          additionalProperties: false,
          required: [],
        },
        response: {
          type: 'object',
          properties: {
            string: {type: 'string', additionalProperties: false, required: [], description: '字符串属性示例'},
            number: {type: 'number', additionalProperties: false, required: [], description: '数字属性示例'},
            boolean: {type: 'boolean', additionalProperties: false, required: [], description: '布尔属性示例'},
            regexp: {type: 'string', additionalProperties: false, required: [], description: '正则属性示例'},
            function: {type: 'string', additionalProperties: false, required: [], description: '函数属性示例'},
            array: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  foo: {type: 'number', additionalProperties: false, required: [], description: '数组元素示例'},
                  bar: {type: 'string', additionalProperties: false, required: [], description: '数组元素示例'},
                },
                required: [],
                additionalProperties: false,
              },
              additionalProperties: false,
              required: [],
              description: '数组属性示例',
            },
            items: {type: 'array', additionalProperties: false, required: [], description: '自定义数组元素示例'},
            object: {
              type: 'object',
              properties: {
                foo: {type: 'number', additionalProperties: false, required: [], description: '对象属性示例'},
                bar: {type: 'string', additionalProperties: false, required: [], description: '对象属性示例'},
              },
              additionalProperties: false,
              required: [],
              description: '对象属性示例',
            },
            placeholder: {type: 'string', additionalProperties: false, required: [], description: '占位符示例'},
          },
          additionalProperties: false,
          required: [],
        },
      }

      return rapperFetch({
        url: extra && extra.mock ? 'http://api.tongyu.tech:38080/app/mock/data/248' : '/example/1600912744094',
        method: 'GET',
        params: req,
        schemas,
        extra,
      }) as Promise<IResponseTypes['GET/example/1600912744094']>
    },

    /**
     * 接口名：lcmWorkflowEvent
     * Rap 地址: http://api.tongyu.tech:3000/repository/editor?id=28&mod=94&itf=249
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/xxxx/lcmWorkflowEventBatchTrigger': (
      req?: IRequestTypes['POST/xxxx/lcmWorkflowEventBatchTrigger'],
      extra?: commonLib.IExtra
    ) => {
      const schemas: {
        request: commonLib.JSONSchema4
        response: commonLib.JSONSchema4
      } = {
        request: {type: 'object', properties: {}, additionalProperties: false, required: []},
        response: {type: 'object', properties: {}, additionalProperties: false, required: []},
      }

      return rapperFetch({
        url:
          extra && extra.mock ? 'http://api.tongyu.tech:38080/app/mock/data/249' : '/xxxx/lcmWorkflowEventBatchTrigger',
        method: 'POST',
        params: req,
        schemas,
        extra,
      }) as Promise<IResponseTypes['POST/xxxx/lcmWorkflowEventBatchTrigger']>
    },
  }
}
