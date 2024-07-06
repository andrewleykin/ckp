import type { SimIccModel } from '@/shared/api';

import type { ClientSimIccModel } from './types';

export const convertClientSimIccModelToBackend = (simIccModel: ClientSimIccModel): SimIccModel => ({
  simNumber: simIccModel.simNumber,
  iccLastFourDigits: simIccModel.iccLastFourDigits,
});
