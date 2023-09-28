// BaseUrl
export const API_URL = "https://api.zebedee.io";

// Test API Key
export const TEST_API_KEY: string = "8qJxln3JVJsQM0IOJhfnJopO0JSiLdlK";

// Test API Key 2 (Receiver)
export const TEST_RECEIVER_API_KEY = "dESXgwgy7GziAbVA7AyN56uATloaburz"

// Test API Key 3 (Internal Transfer)
export const INTERNAL_TRANSFER_API_KEY = "xqIdOA5pZAb9Ir64Qs4BlDlZZ6WrfWGW"



// Endpoints
export const API = {
  // Wallet
  WALLET_ENDPOINT: "/v0/wallet",

  // Charges (Pay Ins)
  CHARGES_ENDPOINT: "/v0/charges",
  STATIC_CHARGES_ENDPOINT: "/v0/static-charges",

  // Payments (Pay Outs)
  PAYMENTS_ENDPOINT: "/v0/payments",

  // Lightning Address
  SEND_LN_ADDRESS_PAYMENT_ENDPOINT: "/v0/ln-address/send-payment",
  VALIDATE_LN_ADDRESS_ENDPOINT: "/v0/ln-address/validate",
  CREATE_CHARGE_FROM_LN_ADDRESS_ENDPOINT: "/v0/ln-address/fetch-charge",

  // ZBD Gamertags
  SEND_GAMERTAG_PAYMENT_ENDPOINT: "/v0/gamertag/send-payment",
  GET_GAMERTAG_PAYMENT_ENDPOINT: "/v0/gamertag/transaction",
  GET_USERID_FROM_GAMERTAG_ENDPOINT: "/v0/user-id/gamertag",
  GET_GAMERTAG_FROM_USERID_ENDPOINT: "/v0/gamertag/user-id",
  CREATE_CHARGE_FROM_GAMERTAG_ENDPOINT: "/v0/gamertag/charges",

  // ZBD Login (OAuth2)
  GET_AUTHORIZATION_ENDPOINT: "/v1/oauth2/authorize",
  FETCH_ACCESS_TOKEN_ENDPOINT: "/v1/oauth2/token",
  REFRESH_TOKEN_ENDPOINT: "/v1/oauth2/token",
  GET_USER_ENDPOINT: "/v1/oauth2/user",
  GET_USER_WALLET_DATA_ENDPOINT: "/v1/oauth2/wallet",

  // Withdrawal Requests
  WITHDRAWAL_REQUESTS_ENDPOINT: "/v0/withdrawal-requests",

  // Keysend
  KEYSEND_PAYMENT_ENDPOINT: "/v0/keysend-payment",

  // Internal Transfers
  INTERNAL_TRANSFER_ENDPOINT: "/v0/internal-transfer",

  // Utilities
  IS_SUPPORTED_REGION_ENDPOINT: "/v0/is-supported-region",
  DECODE_INVOICE_ENDPOINT: "/v0/decode-invoice",
  FETCH_ZBD_PROD_IPS_ENDPOINT: "/v0/prod-ips",
  BTCUSD_PRICE_TICKER_ENDPOINT: "/v0/btcusd",
};
