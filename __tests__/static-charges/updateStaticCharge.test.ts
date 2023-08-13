// import { zbd } from '@zbd/node';
// import { TEST_API_KEY } from '../src/constants';
// import { StaticChargeDataResponseType, StaticChargeOptionsType, isStaticChargeDataResponseType } from '../src/types/static-charges';

//   const ZBD = new zbd(TEST_API_KEY);

// describe('PATCH Update Static Charge', () => {
  
//   const STATIC_CHARGE_ID = '45c225b1-022b-4a37-98d6-5a5568f78d11';
//   it('should successfully update a Static Charge', async () => {
//     const updateOptions: StaticChargeOptionsType = {
//       allowedSlots: null,
//       minAmount: "10000",
//       maxAmount: "5000000",
//       description: "This is my editted static charge",
//       internalId: "myInternalId",
//       callbackUrl: "https://my-website.com/zbd-callback",
//       successMessage: "Congratulations your payment success msg was editted!"
//     };

//     const responseData = await ZBD.updateStaticCharge(STATIC_CHARGE_ID, updateOptions);
//     console.log(responseData)
    
//     expect(responseData.message).toBe('Successfully editted Static Charge.');
//     expect(responseData.data.id).toBe(STATIC_CHARGE_ID);
//     expect(responseData.data.description).toBe(updateOptions.description);
//     // Data Validation 
//     expect(isStaticChargeDataResponseType(responseData)).toBeTruthy();
//   });

//   // Todo: False cases 

// });

