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

import { PayManuallyData, PaymentRequest } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class ManualPaymentController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags manual-payment-controller
   * @name PayManually
   * @request POST:/api/v1/payment/manual
   */
  payManually = (data: PaymentRequest, params: RequestParams = {}) =>
    this.request<PayManuallyData, any>({
      path: `/api/v1/payment/manual`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
