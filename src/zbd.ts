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

    this.axiosClient.interceptors.response.use(
      (response: any) => response.data,
      (error: any) => {
        console.log({ error });
        return error;
        // if (error.response) {
        //   throw new Error(error.response.data);
        // } else {
        //   throw new Error(error.message);
        // }
      }
    );
  }

  async createCharge(options: ChargeOptionsType) {
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
  }

  async getCharge(chargeId: string) {
    const response: ChargeDataResponseType = await this.axiosClient.get(
      `${API.CHARGES_ENDPOINT}/${chargeId}`
    );

    return response;
  }

  async createWithdrawalRequest(options: WithdrawalRequestOptionsType) {
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
  }

  async getWithdrawalRequest(withdrawalRequestId: string) {
    const response: WithdrawalRequestDataResponseType = await this.axiosClient.get(
      `${API.WITHDRAWAL_REQUESTS_ENDPOINT}/${withdrawalRequestId}`
    );

    return response;
  }

  async validateLightningAddress(lightningAddress: string) {
    const response: ValidateLightningAddressDataResponseType = await this.axiosClient.get(
      `${API.VALIDATE_LN_ADDRESS_ENDPOINT}/${lightningAddress}`,
    );

    return response;
  }

  async sendLightningAddressPayment(options: SendLightningAddressPaymentOptionsType) {
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
  }

  async getWallet() {
    const response: WalletDataResponseType = await this.axiosClient.get(
      API.WALLET_ENDPOINT,
    );

    return response;
  }

  async isSupportedRegion(ipAddress: string) {
    const response: SupportedRegionDataResponseType = await this.axiosClient.get(
      `${API.IS_SUPPORTED_REGION_ENDPOINT}/${ipAddress}`,
    );

    return response;
  }

  async fetchZBDProdIps() {
    const response: ProdIPSDataResponseType = await this.axiosClient.get(
      API.FETCH_ZBD_PROD_IPS_ENDPOINT,
    );

    return response;
  }

  async btcUsdExchangeRate() {
    const response: BTCUSDDataResponseType = await this.axiosClient.get(
      API.BTCUSD_PRICE_TICKER_ENDPOINT,
    );

    return response;
  }

  async internalTransfer(options: InternalTransferOptionsType) {
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
  }

  async sendKeysendPayment(options: KeysendOptionsType) {
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
  }

  async payCharge(options: SendPaymentOptionsType) {
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
  }

  async getPayment(paymentId: string) {
    const response: InvoicePaymentDataResponseType = await this.axiosClient.get(
      `${API.PAYMENTS_ENDPOINT}/${paymentId}`,
    );

    return response;
  }

  async sendGamertagPayment(options: SendGamertagPaymentOptionsType) {
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
  }

  async fetchGamertagTransaction(transactionId: string) {
    const response: GamertagTransactionDataResponseType = await this.axiosClient.get(
      `${API.FETCH_GAMERTAG_PAYMENT_ENDPOINT}/${transactionId}`,
    );

    return response;
  }

  async fetchUserIdByGamertag(gamertag: string) {
    const response: FetchUserIdByGamertagDataResponseType = await this.axiosClient.get(
      `${API.FETCH_USERID_FROM_GAMERTAG_ENDPOINT}/${gamertag}`,
    );

    return response;
  }

  async fetchGamertagByUserId(userId: string) {
    const response: FetchGamertagByUserIdDataResponseType = await this.axiosClient.get(
      `${API.FETCH_GAMERTAG_FROM_USERID_ENDPOINT}/${userId}`,
    );

    return response;
  }

   async createGamertagCharge(options: FetchChargeFromGamertagOptionsType) {
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
  }

  async createStaticCharge(options: StaticChargeOptionsType) {
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
  }

  async updateStaticCharge(staticChargeId: string, updates: StaticChargeOptionsType) {
    const response: StaticChargeDataResponseType = await this.axiosClient.patch(
      `${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
      updates,
    );

    return response;
  }


  async getStaticCharge(staticChargeId: string) {
    const response: StaticChargeDataResponseType = await this.axiosClient.get(
      `${API.STATIC_CHARGES_ENDPOINT}/${staticChargeId}`,
    );

    return response;
  }

}

export { zbd };
