export interface ChargeOptionsType {
  expiresIn: number;
  amount: string;
  description: string;
  internalId: string;
  callbackUrl: string;
}

export interface DecodeChargeOptionsType {
  invoice: string;
}

export interface ChargeDataResponseType {
  data: {
    id: string;
    unit: string;
    amount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string;
    description: string;
    expiresAt: string;
    confirmedAt: string;
    status: string;
    invoice: {
      request: string;
      uri: string;
    }
  }
  message: string;
  success: boolean;
}

export interface DecodeChargeResponseType {
  data: {
    unit: string;
    status: string;
    amount: string;
    createdAt: string;
    internalId: string;
    callbackUrl: string;
    description: string;
    invoiceRequest: string;
    invoiceExpiresAt: string;
    invoiceDescriptionHash: string | null;
  }
  success: boolean;
}