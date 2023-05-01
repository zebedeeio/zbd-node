import axios from 'axios';

import { API_URL, API } from './constants';
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
  axiosClient: any;  

  constructor(apiKey: any) {
    this.apiKey = apiKey;
    this.apiBaseUrl = API_URL;

    this.axiosClient = axios.create({
      baseURL: this.apiBaseUrl,
      headers: {
        apikey: apiKey,
        'Content-Type': 'application/json',
      },
    });
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
  
      const response: ChargeDataResponseType = await this.axiosClient.post(
        API.CHARGES_ENDPOINT,
        {
          amount,
          expiresIn,
          internalId,
          description,
          callbackUrl,
        },
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getCharge(chargeId: string) {
    try {
      const response: ChargeDataResponseType = await this.axiosClient.get(
        `${API.CHARGES_ENDPOINT}/${chargeId}`
      );
  
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
  
      const response: WithdrawalRequestDataResponseType = await this.axiosClient.post(
        API.WITHDRAWAL_REQUESTS_ENDPOINT,
        {
          amount,
          expiresIn,
          internalId,
          callbackUrl,
          description,
        },
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getWithdrawalRequest(withdrawalRequestId: string) {
    try {
      const response: WithdrawalRequestDataResponseType = await this.axiosClient.get(
        `${API.WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async validateLightningAddress(lightningAddress: string) {
    try {
      const response: ValidateLightningAddressDataResponseType = await this.axiosClient.get(
        `${API.VALIDATE_LN_ADDRESS_ENDPOINT}/${lightningAddress}`,
      );
  
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
  
      const response: SendLightningAddressPaymentDataResponseType = await this.axiosClient.post(
        API.SEND_LN_ADDRESS_PAYMENT_ENDPOINT,
        {
          amount,
          comment,
          lnAddress,
          internalId,
          callbackUrl,
        },
      );
  
      return response;
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      throw error;
    }
  }
  
  async getWallet() {
    try {
      const response: WalletDataResponseType = await this.axiosClient.get(
        API.WALLET_ENDPOINT,
      );
        
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async isSupportedRegion(ipAddress: string) {
    try {
      const response: SupportedRegionDataResponseType = await this.axiosClient.get(
        `${API.IS_SUPPORTED_REGION_ENDPOINT}/${ipAddress}`,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchZBDProdIps() {
    try {
      const response: ProdIPSDataResponseType = await this.axiosClient.get(
        API.FETCH_ZBD_PROD_IPS_ENDPOINT,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async btcUsdExchangeRate() {
    try {
      const response: BTCUSDDataResponseType = await this.axiosClient.get(
        API.BTCUSD_PRICE_TICKER_ENDPOINT,
      );
  
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
  
      const response: InternalTransferDataResponseType = await this.axiosClient.post(
        API.INTERNAL_TRANSFER_ENDPOINT,
        {
          amount,
          receiverWalletId,
        }
      );
  
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
        tlvRecords,
        metadata,
        callbackUrl,
      } = options;
  
      const response: KeysendDataResponseType = await this.axiosClient.post(
        API.KEYSEND_PAYMENT_ENDPOINT,
        {
          amount,
          pubkey,
          tlvRecords,
          metadata,
          callbackUrl,
        },
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async payCharge(options: SendPaymentOptionsType) {
    try {
      const {
        invoice,
        description,
        callbackUrl,
        internalId,
        amount,
      } = options;

      const response: InvoicePaymentDataResponseType = await this.axiosClient.post(
        API.PAYMENTS_ENDPOINT,
        {
          invoice,
          description,
          callbackUrl,
          internalId,
          amount,
        },
      );

      return response; 
    } catch (error: any) {
      throw error;
    }
  }

  async getPayment(paymentId: string) {
    try {
      const response: InvoicePaymentDataResponseType = await this.axiosClient.get(
        `${API.PAYMENTS_ENDPOINT}/${paymentId}`,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async sendGamertagPayment(options: SendGamertagPaymentOptionsType) {
    try {
      const {
        gamertag,
        amount,
        description,
      } = options;
  
      const response: KeysendDataResponseType = await this.axiosClient.post(
        API.SEND_GAMERTAG_PAYMENT_ENDPOINT, 
        {
          gamertag,
          amount,
          description,
        },
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchGamertagTransaction(transactionId: string) {
    try {
      const response: GamertagTransactionDataResponseType = await this.axiosClient.get(
        `${API.FETCH_GAMERTAG_PAYMENT_ENDPOINT}/${transactionId}`,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchUserIdByGamertag(gamertag: string) {
    try {
      const response: FetchUserIdByGamertagDataResponseType = await this.axiosClient.get(
        `${API.FETCH_USERID_FROM_GAMERTAG_ENDPOINT}/${gamertag}`,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async fetchGamertagByUserId(userId: string) {
    try {
      const response: FetchGamertagByUserIdDataResponseType = await this.axiosClient.get(
        `${API.FETCH_GAMERTAG_FROM_USERID_ENDPOINT}/${userId}`,
      );
  
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
        description,
        callbackUrl,
        internalId,
      } = options;
  
      const response: FetchChargeFromGamertagDataResponseType = await this.axiosClient.post(
        API.FETCH_CHARGE_FROM_GAMERTAG_ENDPOINT,
        {
          amount,
          gamertag,
          description,
          callbackUrl,
          internalId,
        },
      );
  
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
  
      const response: StaticChargeDataResponseType = await this.axiosClient.post(
        API.STATIC_CHARGES_ENDPOINT,
        {
          allowedSlots,
          minAmount,
          maxAmount,
          description,
          internalId,
          callbackUrl,
          successMessage,
        },
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async updateStaticCharge(staticChargeId: string, updates: StaticChargeOptionsType) {
    try {
      const response: StaticChargeDataResponseType = await this.axiosClient.patch(
        `${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
        updates,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }

  async getStaticCharge(staticChargeId: string) {
    try {
      const response: StaticChargeDataResponseType = await this.axiosClient.get(
        `${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
      );
  
      return response;
    } catch (error: any) {
      throw error;
    }
  }
}

export { zbd };
