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

import { FindByData, FindByIdData, FindByParams } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class ShipmentController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags shipment-controller
   * @name FindBy
   * @request GET:/api/v1/shipment/stored
   */
  findBy = (query: FindByParams, params: RequestParams = {}) =>
    this.request<FindByData, any>({
      path: `/api/v1/shipment/stored`,
      method: 'GET',
      query: query,
      ...params,
    });
  /**
   * No description
   *
   * @tags shipment-controller
   * @name FindById
   * @request GET:/api/v1/shipment/stored/{id}
   */
  findById = (id: number, params: RequestParams = {}) =>
    this.request<FindByIdData, any>({
      path: `/api/v1/shipment/stored/${id}`,
      method: 'GET',
      ...params,
    });
}
