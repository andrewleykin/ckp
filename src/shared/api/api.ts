import { SimcardController } from './generated-api/SimcardController';
import { TinkoffPaymentController } from './generated-api/TinkoffPaymentController';

export const api = {
  simcard: new SimcardController(),
  tinkoffPayment: new TinkoffPaymentController(),
};
