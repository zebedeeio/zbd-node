export interface WithdrawalRequestOptionsType {
  amount: string;
  expiresIn: number;
  description: string;
  internalId: string;
  callbackUrl: string;
}
  
export interface GetWithdrawalRequestDataResponseType {
  data: {
    id: string;
    unit: string;
    amount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string;
    description: string;
    expiresAt: string;
    status: string;
    invoice: {
      request: string;
      uri: string;
      fastRequest: string;
      fastUri: string;
    }
  }
  message: string | null | undefined;
  success: boolean;
}


export interface CreateWithdrawalRequestDataResponseType {
  data: {
    id: string;
    unit: string;
    amount: string;
    createdAt: string;
    callbackUrl: string;
    internalId: string;
    description: string;
    expiresAt: string;
    status: string;
    fee: string;
    invoice: {
      request: string;
      uri: string;
      fastRequest: string;
      fastUri: string;
    }
  }
  message: string;
  success: boolean;
}

export function isGetWithdrawalRequestDataResponseType(obj: any): obj is GetWithdrawalRequestDataResponseType {
  return (
    obj &&
    typeof obj.success === "boolean" &&
    (!obj.message || typeof obj.message === "string") && // Adjusted this check
    obj.data &&
    typeof obj.data.id === "string" &&
    typeof obj.data.unit === "string" &&
    typeof obj.data.amount === "string" &&
    typeof obj.data.createdAt === "string" &&
    typeof obj.data.expiresAt === "string" &&
    typeof obj.data.internalId === "string" &&
    typeof obj.data.description === "string" &&
    typeof obj.data.callbackUrl === "string" &&
    typeof obj.data.status === "string" &&
    (obj.data.fee === null || typeof obj.data.fee === "number") &&
    obj.data.invoice &&
    typeof obj.data.invoice.request === "string" &&
    typeof obj.data.invoice.uri === "string" &&
    typeof obj.data.invoice.fastRequest === "string" &&
    typeof obj.data.invoice.fastUri === "string"
  );
}


export function isCreateWithdrawalRequestDataResponseType(obj: any): obj is CreateWithdrawalRequestDataResponseType {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.success === 'boolean' &&
    typeof obj.message === 'string' &&
    typeof obj.data === 'object' &&
    obj.data !== null &&
    typeof obj.data.id === 'string' &&
    typeof obj.data.unit === 'string' &&
    typeof obj.data.amount === 'string' &&
    typeof obj.data.createdAt === 'string' &&
    typeof obj.data.expiresAt === 'string' &&
    typeof obj.data.callbackUrl === 'string' &&
    typeof obj.data.internalId === 'string' &&
    typeof obj.data.description === 'string' &&
    typeof obj.data.status === 'string' &&
    (typeof obj.data.fee === 'string' || obj.data.fee === null) &&
    typeof obj.data.invoice === 'object' &&
    obj.data.invoice !== null &&
    typeof obj.data.invoice.request === 'string' &&
    typeof obj.data.invoice.fastRequest === 'string' &&
    typeof obj.data.invoice.uri === 'string' &&
    typeof obj.data.invoice.fastUri === 'string'
  );
}
