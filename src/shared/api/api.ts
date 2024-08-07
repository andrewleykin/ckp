import { ManualPaymentController } from './generated-api/ManualPaymentController';
import { ShipmentController } from './generated-api/ShipmentController';
import { SimcardController } from './generated-api/SimcardController';
import { TinkoffPaymentController } from './generated-api/TinkoffPaymentController';

export const api = {
  simcard: new SimcardController(),
  tinkoffPayment: new TinkoffPaymentController(),
  manualPayment: new ManualPaymentController(),
  shipmentController: new ShipmentController(),
};
