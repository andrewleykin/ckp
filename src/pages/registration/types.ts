import type { SimIccModel } from '@/shared/api';

export type ClientSimIccModel = SimIccModel & {
  id: number;
  errorText?: string;
};

export enum ClientInfoEnterStep {
  COMMON_INFO,
  ACCOUNTABLE_INFO,
  ADDITIONAL_INFO,
  PAYMENT,
  MANUAL_SUCCESS,
}
