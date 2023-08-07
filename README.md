<h1 align='center'>ZBD Node.js SDK</h1>

<div align='center'>
<img width='100' src='https://zbd-node.dev.zebedee.cloud/zbd-node-logo.png' />
</div>
<br />

<div align='center'>

Node.js library for the ZBD API

<br />

[![bitcoin ln payments](https://img.shields.io/badge/Bitcoin%20Lightning-Payments-orange?style=for-the-badge&logo=bitcoin)](https://www.npmjs.com/package/@zbd/node)
<br/>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zebedeeio/zbd-node/blob/HEAD/LICENSE.md) [![npm latest package](https://img.shields.io/npm/v/@zbd/node/latest.svg)](https://www.npmjs.com/package/@zbd/node) [![latest build](https://img.shields.io/badge/build-passing-blueviolet)](https://www.npmjs.com/package/@zbd/node) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/zebedeeio/zbd-node/blob/HEAD/CONTRIBUTING.md#pull-requests)

<br />


<p align='center'>
  <a href='https://zbd-node.dev.zebedee.cloud'><strong>Documentation</strong></a> ·
  <a href='https://dashboard.zebedee.io'><strong>Developer Dashboard</strong></a> ·
  <a href='https://nextjs.zbd.dev'><strong>Dev Playground</strong></a> ·
  <a href='https://status.zebedee.io'><strong>API Status</strong></a>
</p>

</div>

---

<div align='left'>
<br />

## Introduction

**This is the SDK for NodeJS that interacts with the ZBD API.**

[ZBD](https://zebedee.io) is the payments platform for modern developers, providing the speed and reliability innovators need to create monetized and meaningfully-engaging user experiences.

We enable businesses and consumers to quickly introduce instantaneous Bitcoin payments to the fabric of their applications, games, and platforms. ZBD has the most comprehensive set of Bitcoin Lightning API capabilities and is industry-leader in supporting companies in the fields of gaming, social, adtech and fintech.

With ZBD, it's easy! Anyone can do it. **What are YOU building?**

------

## Installation

If you're an `npm` user:

```bash
npm install @zbd/node
```

Or if you're a `Yarn` user:

```bash
npm install @zbd/node
```

## Available API Methods

Below you can find source code examples of how to use each of the available API methods in the @zbd/node SDK library.

### createCharge

```js
// Construct payload
const payload = {
  amount: '15000',
  expiresIn: 300,
  internalId: '1b8h1-h1675',
  description: 'Charge description',
  callbackUrl: 'https://your-domain.com/zbd-callback'
}

// Create Charge / Payment Request
const data = await zbd.createCharge(payload);
```

### getCharge

```js
// Get Charge Details
const data = await zbd.getCharge('1907b0fe-789b-4e27-b18a-0c3c0f5cced7');
```

### decodeCharge

```js
// Construct payload
const payload = {
  invoice: 'lnbc2123250n1pjpr2qmpp526234tljpx5756pa2fyj2zrdmn2tnz9rhj54km2s7dv0pap3vtkqhp5extcuyp2x0ydfwnfhrc5cwx8azxeen2g7hxr29464ezvn3k6w2fqcqzpgxqzjcsp5xzelh2w3twt4ysvva2ugu2klurmrl7nk8h46x2hcthf9cvee24jq9qyyssq6an9tjftjymjeklerjmw8cv4ccpsvd2vzuzxn5upt9s37hnw2r0z0n5cd8cqq8jq5ems00tugt5jnw5jn03tr84945nd6j4hsfsu7kqp9hptk2'
}

// Decode Charge
const data = await zbd.decodeCharge(payload);
```

### createStaticCharge

```js
// Construct payload
const payload = {
  maxAmount: '20000',
  minAmount: '10000',
  internalId: '1b8h1-h1675',
  description: 'Static Charge API Ref',
  callbackUrl: 'https://your-domain.com/zbd-callback',
  successMessage: 'Congratulations your payment was successful!'
}

// Create Static Charge QR
const data = await zbd.createStaticCharge(payload);
```

### getStaticCharge

```js
// Get Static Charge Details
const data = await zbd.getCharge('6557a0fe-7a9b-4e27-b18a-0c3c0f5cced7');
```

### updateStaticCharge

```js
// Construct update payload
const updatePayload = {
  maxAmount: '5000000',
  minAmount: '10000',
  ...
}

// Update Static Charge Details
const data = await zbd.updateStaticCharge(
  '6557a0fe-7a9b-4e27-b18a-0c3c0f5cced7',
  updatePayload,
);
```

### createWithdrawalRequest

```js
// Construct payload
const payload = {
  amount: '15000',
  description: 'Withdraw QR!',
  expiresIn: 300,
  internalId: '1b8h1-h1675',
  callbackUrl: 'https://your-domain.com/zbd-callback'
}

// Create Withdrawal Request 
const data = await zbd.createWithdrawalRequest(payload);
```

### getWithdrawalRequest

```js
// Get Withdrawal Request Details
const data = await zbd.getWithdrawalRequest('6557a0fe-7a9b-4e27-b18a-0c3c0f5cced7');
```

### sendLightningAddressPayment

```js
// Construct payload
const payload = {
  amount: '15000',
  lnAddress: 'andre@zbd.gg',
  comment: 'Lightning fast!',
  internalId: '1b8h1-h1675',
  callbackUrl: 'https://your-domain.com/zbd-callback'
}

// Sending Lightning Address Payment
const data = await zbd.sendLightningAddressPayment(payload);
```

### validateLightningAddress

```js
// Validate Lightning Address
const data = await zbd.validateLightningAddress('andre@zbd.gg');
```

### createChargeFromLightningAddress

```js
// Construct payload
const payload = {
  amount: '15000',
  lnAddress: 'andre@zbd.gg',
  description: 'Lightning fast!',
}

// Create Charge / Payment Request for given ZBD Gamertag
const data = await zbd.createChargeFromLightningAddress(payload);
```

### getWallet

```js
// Get Wallet Balance
const data = await zbd.getWallet();
```

### internalTransfer

```js
// Construct payload
const payload = {
  amount: '10000',
  receiverWalletId: 'b994ee02-dc0b-4f14-b99f-1f2d3daa01a6'
}

// Initiate Internal Transfer
const data = await zbd.internalTransfer(payload);
```

### sendKeysendPayment

```js
// Construct payload
const payload = {
  amount: '10000',
  callbackUrl: 'https://your-domain.com/zbd-callback',
  pubkey: '0332d57355d673e217238ce3e4be8491aa6b2a13f95494133ee243e57df1653ace',
}

// Sending Keysend Payment
const data = await zbd.sendKeysendPayment(payload);
```

### sendPayment

```js
// Construct payload
const payload = {
  description: 'Lightning fast!',
  invoice: 'lnbc2123250n1pjpr2qmpp526234tljpx5756pa2fyj2zrdmn2tnz9rhj54km2s7dv0pap3vtkqhp5extcuyp2x0ydfwnfhrc5cwx8azxeen2g7hxr29464ezvn3k6w2fqcqzpgxqzjcsp5xzelh2w3twt4ysvva2ugu2klurmrl7nk8h46x2hcthf9cvee24jq9qyyssq6an9tjftjymjeklerjmw8cv4ccpsvd2vzuzxn5upt9s37hnw2r0z0n5cd8cqq8jq5ems00tugt5jnw5jn03tr84945nd6j4hsfsu7kqp9hptk2',
  internalId: '1b8h1-h1675',
  callbackUrl: 'https://your-domain.com/zbd-callback'
}

// Make Payment
const data = await zbd.sendPayment(payload);
```

### getPayment

```js
// Get Payment Transaction Details
const data = await zbd.getPayment('6557a0fe-7a9b-4e27-b18a-0c3c0f5cced7');
```

### sendGamertagPayment

```js
// Construct payload
const payload = {
  amount: '10000',
  gamertag: 'andre',
  description: 'Sending to ZBD Gamertag',
}

// Sending ZBD Gamertag Payment
const data = await zbd.sendGamertagPayment(payload);
```

### getGamertagTransaction

```js
// Get Gamertag Payment Transaction Details
const data = await zbd.getGamertagTransaction('6557a0fe-7a9b-4e27-b18a-0c3c0f5cced7');
```

### getUserIdByGamertag

```js
// Get User ID
const data = await zbd.getUserIdByGamertag('satoshi');
```

### getGamertagByUserId

```js
// Get User ID
const data = await zbd.getGamertagByUserId('6557a0fe-7a9b-4e27-b18a-0c3c0f5cced7');
```

### isSupportedRegion

```js
// Is Supported Region
const data = await zbd.isSupportedRegion('12.110.139.14');
```

### getZBDProdIps

```js
// Get ZBD API Production IPs
const data = await zbd.getZBDProdIps();
```

### getBtcUsdExchangeRate

```js
// Get BTC USD Exchange Rate
const data = await zbd.getBtcUsdExchangeRate();
```

## Full API Reference & Configuration

[View full documentation and API reference for the @zbd/node library](https://node.zbd.dev).

![](https://i.imgur.com/D84ZZtg.png)

## HTTP REST API

Reminder that while you should use the @zbd/node library if you're in a Node.js environment, you can also
work with the HTTP API directly. [Full API reference and details can be found here](https://docs.zebedee.io/api/intro).

## Support

Join our Discord 

* [Discord: @zbd](https://discord.com/zbd)
* [Twitter: @zebedeeio](https://twitter.com/zebedeeio)
* [Open Support Ticket](https://help.zebedee.io)

</div>
