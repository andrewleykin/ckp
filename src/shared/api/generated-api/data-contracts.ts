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

export interface SimIccModel {
  /**
   * @minLength 11
   * @maxLength 11
   */
  simNumber: string;
  /**
   * @minLength 4
   * @maxLength 4
   */
  iccLastFourDigits: string;
}

export interface SimValidationRequest {
  simcards: SimIccModel[];
}

export interface PartnerView {
  /** @format int64 */
  id?: number;
  name?: string;
  defaultPaymentType?: PartnerViewDefaultPaymentTypeEnum;
  /** @format date-time */
  createdDate?: string;
  inn?: string;
  kpp?: string;
  address?: string;
}

export interface SimErrorModel {
  simNumber?: string;
  reason?: string;
}

export interface SimValidationResponse {
  valid?: boolean;
  simcardErrors?: SimErrorModel[];
  error?: string;
  partner?: PartnerView;
}

export interface ReplaceSimcardDto {
  inn: string;
  /**
   * @minLength 11
   * @maxLength 11
   */
  number: string;
  /**
   * @minLength 11
   * @maxLength 11
   */
  newNumber: string;
  /**
   * @minLength 4
   * @maxLength 4
   */
  iccEnd: string;
}

export interface BlockSimcardDto {
  /**
   * @minLength 11
   * @maxLength 11
   */
  number: string;
  inn: string;
}

export interface ClientDto {
  name: string;
  bossName: string;
  accountableName: string;
  /**
   * @minLength 11
   * @maxLength 11
   */
  accountablePhoneNumber: string;
  email: string;
  inn: string;
  kpp?: string;
  address: string;
}

export interface RegistrationRequest {
  simcards: SimIccModel[];
  client: ClientDto;
}

export interface RegistrationResponse {
  shipmentIds?: number[];
}

export interface PaymentRequest {
  shipmentIds: number[];
  salesman: string;
}

export interface TinkoffPaymentResponse {
  success?: boolean;
  paymentURL?: string;
  /** @format int64 */
  paymentId?: number;
}

export enum PartnerViewDefaultPaymentTypeEnum {
  TINKOFF_ACQUIRING = 'TINKOFF_ACQUIRING',
  MANUAL = 'MANUAL',
}

export type ValidateSimData = SimValidationResponse;

export type ReplaceData = any;

export type BlockData = any;

export type RegisterData = RegistrationResponse;

export type PayTinkoffData = TinkoffPaymentResponse;

export type PayManuallyData = any;

export interface ConfirmTinkoffParams {
  paymentId: string;
}

export type ConfirmTinkoffData = any;
