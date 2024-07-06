import type { RouteRecordRaw } from 'vue-router';

import { PartnerViewDefaultPaymentTypeEnum } from '@/shared/api';
import { LayoutType, RouteName } from '@/shared/config';
import { readableEnum } from '@/shared/lib';
import type { UiStep } from '@/shared/ui/ui-steps';

import { ClientInfoEnterStep } from './types';

export const route: RouteRecordRaw = {
  path: '/registration',
  name: RouteName.REGISTRATION,
  component: () => import('./ui/registration.vue'),

  meta: {
    layout: LayoutType.DEFAULT,
  },
};

export const getClientInfoEnterSteps = (
  defaultPaymentType: PartnerViewDefaultPaymentTypeEnum,
): ClientInfoEnterStep[] => {
  const result = [
    ClientInfoEnterStep.COMMON_INFO,
    ClientInfoEnterStep.ACCOUNTABLE_INFO,
    ClientInfoEnterStep.ADDITIONAL_INFO,
  ];

  if (defaultPaymentType === PartnerViewDefaultPaymentTypeEnum.TINKOFF_ACQUIRING) {
    result.push(ClientInfoEnterStep.PAYMENT);
  }

  return result;
};

const readableStep = readableEnum<ClientInfoEnterStep>({
  [ClientInfoEnterStep.COMMON_INFO]: 'ИП/Юр.лицо',
  [ClientInfoEnterStep.ACCOUNTABLE_INFO]: 'Ответственное лицо',
  [ClientInfoEnterStep.ADDITIONAL_INFO]: 'Доп. информация',
  [ClientInfoEnterStep.PAYMENT]: 'Оплата',
});

export const getSteps = (stepsWithoutText: ClientInfoEnterStep[]): UiStep[] =>
  stepsWithoutText.map((step) => ({
    text: readableStep(step),
    key: step.toString(),
  }));
