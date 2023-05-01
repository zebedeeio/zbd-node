import { API_URL, API } from './constants';
import { postData, getData, patchData } from './utils';
import {
  ChargeOptionsType,
  KeysendOptionsType,
  ChargeDataResponseType,
  WalletDataResponseType,
  BTCUSDDataResponseType,
  SendPaymentOptionsType,
  ProdIPSDataResponseType,
  StaticChargeOptionsType,
  KeysendDataResponseType,
  InternalTransferOptionsType,
  StaticChargeDataResponseType,
  WithdrawalRequestOptionsType,
  SendGamertagPaymentOptionsType,
  InvoicePaymentDataResponseType,
  SupportedRegionDataResponseType,
  InternalTransferDataResponseType,
  WithdrawalRequestDataResponseType,
  FetchChargeFromGamertagOptionsType,
  GamertagTransactionDataResponseType,
  FetchUserIdByGamertagDataResponseType,
  FetchGamertagByUserIdDataResponseType,
  SendLightningAddressPaymentOptionsType,
  FetchChargeFromGamertagDataResponseType,
  ValidateLightningAddressDataResponseType,
  SendLightningAddressPaymentDataResponseType,
} from './types';

class zbd {
  apiKey: any;
  apiBaseUrl: any;
  apiCoreHeaders: any;  

  constructor(apiKey: any) {
    this.apiKey = apiKey;
    this.apiBaseUrl = API_URL;
    this.apiCoreHeaders = {
      apikey: apiKey,
    };
  }

  async createCharge(options: ChargeOptionsType) {
    try {
      const {
        amount,
        expiresIn,
        internalId,
        description,
        callbackUrl,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.CHARGES_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          expiresIn,
          internalId,
          description,
          callbackUrl,
        },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getCharge(chargeId: string) {
    try {
      const response = await getData({
        url: `${API_URL}${API.CHARGES_ENDPOINT}/${chargeId}`,
        headers: { ...this.apiCoreHeaders },
      });
        
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async createWithdrawalRequest(options: WithdrawalRequestOptionsType) {    
    try {
      const {
        amount,
        expiresIn,
        internalId,
        callbackUrl,
        description,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.WITHDRAWAL_REQUESTS_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          expiresIn,
          internalId,
          callbackUrl,
          description,
        },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getWithdrawalRequest(withdrawalRequestId: string) {
    try {
      const response = await getData({
        url: `${API_URL}${API.WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`,
        headers: { ...this.apiCoreHeaders },
      });
        
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async validateLightningAddress(lightningAddress: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.VALIDATE_LN_ADDRESS_ENDPOINT}/${lightningAddress}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async sendLightningAddressPayment(options: SendLightningAddressPaymentOptionsType) {    
    try {
      const {
        amount,
        comment,
        lnAddress,
        internalId,
        callbackUrl,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.SEND_LN_ADDRESS_PAYMENT_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          comment,
          lnAddress,
          internalId,
          callbackUrl,
        },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }
  
  async getWallet() {
    try {
      const response = await getData({
        url: `${API_URL}${API.WALLET_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
      });
        
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async isSupportedRegion(ipAddress: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.IS_SUPPORTED_REGION_ENDPOINT}/${ipAddress}`,
        headers: { ...this.apiCoreHeaders },
      });
        
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchZBDProdIps() {    
    try {
      const response = await getData({
        url: `${API_URL}${API.FETCH_ZBD_PROD_IPS_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async btcUsdExchangeRate() {    
    try {
      const response = await getData({
        url: `${API_URL}${API.BTCUSD_PRICE_TICKER_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async internalTransfer(options: InternalTransferOptionsType) {    
    try {
      const {
        amount,
        receiverWalletId,
      } = options;
  
      const response = await postData({
        url: `${API_URL}${API.INTERNAL_TRANSFER_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          receiverWalletId,
        },
      });

      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async sendKeysendPayment(options: KeysendOptionsType) {    
    try {
      const {
        amount,
        pubkey,
        metadata,
        tlvRecords,
        callbackUrl,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.KEYSEND_PAYMENT_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          pubkey,
          metadata,
          tlvRecords,
          callbackUrl,
        },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async payCharge(options: SendPaymentOptionsType) {    
    try {
      const {
        amount,
        invoice,
        internalId,
        description,
        callbackUrl,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.PAYMENTS_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          invoice,
          internalId,
          description,
          callbackUrl,
        },
      });

      return response; 
    } catch (error: any) {
      throw error;
    }
  }

  async getPayment(paymentId: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.PAYMENTS_ENDPOINT}/${paymentId}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async sendGamertagPayment(options: SendGamertagPaymentOptionsType) {    
    try {
      const {
        amount,
        gamertag,
        description,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.SEND_GAMERTAG_PAYMENT_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          gamertag,
          description,
        },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchGamertagTransaction(transactionId: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.FETCH_GAMERTAG_PAYMENT_ENDPOINT}/${transactionId}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchUserIdByGamertag(gamertag: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.FETCH_USERID_FROM_GAMERTAG_ENDPOINT}/${gamertag}`,
        headers: { ...this.apiCoreHeaders },
      });

      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchGamertagByUserId(userId: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.FETCH_GAMERTAG_FROM_USERID_ENDPOINT}/${userId}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

   async createGamertagCharge(options: FetchChargeFromGamertagOptionsType) {    
    try {
      const {
        amount,
        gamertag,
        internalId,
        description,
        callbackUrl,
      } = options;


      const response = await postData({
        url: `${API_URL}${API.FETCH_CHARGE_FROM_GAMERTAG_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          amount,
          gamertag,
          internalId,
          description,
          callbackUrl,
        },
      });

      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async createStaticCharge(options: StaticChargeOptionsType) {    
    try {
      const {
        allowedSlots,
        minAmount,
        maxAmount,
        description,
        internalId,
        callbackUrl,
        successMessage,
      } = options;

      const response = await postData({
        url: `${API_URL}${API.STATIC_CHARGES_ENDPOINT}`,
        headers: { ...this.apiCoreHeaders },
        body: {
          minAmount,
          maxAmount,
          internalId,
          callbackUrl,
          description,
          allowedSlots,
          successMessage,
        },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async updateStaticCharge(staticChargeId: string, updates: StaticChargeOptionsType) {    
    try {
      const response = await patchData({
        url: `${API_URL}${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
        headers: { ...this.apiCoreHeaders },
        body: updates,
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getStaticCharge(staticChargeId: string) {    
    try {
      const response = await getData({
        url: `${API_URL}${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
        headers: { ...this.apiCoreHeaders },
      });
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}

export { zbd };
