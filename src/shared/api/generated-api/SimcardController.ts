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

import {
  BlockData,
  BlockSimcardDto,
  RegisterData,
  RegisterParams,
  ReplaceData,
  ReplaceSimcardDto,
  SimValidationRequest,
  ValidateSimData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class SimcardController<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags simcard-controller
   * @name ValidateSim
   * @request PUT:/api/v1/simcard/validate
   */
  validateSim = (data: SimValidationRequest, params: RequestParams = {}) =>
    this.request<ValidateSimData, any>({
      path: `/api/v1/simcard/validate`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags simcard-controller
   * @name Replace
   * @request PUT:/api/v1/simcard/replace
   */
  replace = (data: ReplaceSimcardDto, params: RequestParams = {}) =>
    this.request<ReplaceData, any>({
      path: `/api/v1/simcard/replace`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags simcard-controller
   * @name Block
   * @request PUT:/api/v1/simcard/block
   */
  block = (data: BlockSimcardDto, params: RequestParams = {}) =>
    this.request<BlockData, any>({
      path: `/api/v1/simcard/block`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags simcard-controller
   * @name Register
   * @request POST:/api/v1/simcard/register
   */
  register = (query: RegisterParams, params: RequestParams = {}) =>
    this.request<RegisterData, any>({
      path: `/api/v1/simcard/register`,
      method: 'POST',
      query: query,
      ...params,
    });
}
