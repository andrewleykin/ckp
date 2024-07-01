/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ConfirmTinkoffData, ConfirmTinkoffParams, PaymentRequest, PayTinkoffData } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class TinkoffPaymentController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags tinkoff-payment-controller
   * @name PayTinkoff
   * @request POST:/api/v1/payment/tinkoff
   */
  payTinkoff = (data: PaymentRequest, params: RequestParams = {}) =>
    this.request<PayTinkoffData, any>({
      path: `/api/v1/payment/tinkoff`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags tinkoff-payment-controller
   * @name ConfirmTinkoff
   * @request GET:/api/v1/payment/tinkoff/{paymentId}/confirm
   */
  confirmTinkoff = ({ paymentId, ...query }: ConfirmTinkoffParams, params: RequestParams = {}) =>
    this.request<ConfirmTinkoffData, any>({
      path: `/api/v1/payment/tinkoff/${paymentId}/confirm`,
      method: 'GET',
      query: query,
      ...params,
    });
}
