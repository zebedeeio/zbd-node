import { TEST_API_KEY } from '../../src/constants';
import { zbd } from '../../src/zbd';
import { FetchChargeFromLightningAddressDataResponseType, CreateChargeFromLightningAddressOptionsType, isFetchChargeFromLightningAddressResponseType,  } from '../../src/types/lightning'; // Ensure you create this type checker function

const ZBD = new zbd(TEST_API_KEY);

describe('fetchChargeFromLightningAddress', () => {
  
    const payload: CreateChargeFromLightningAddressOptionsType  = {
        lnAddress: "andre@zbd.gg",
        lnaddress: "andre@zbd.gg",
        amount: "10000",
        description: "Sending to a Lightning Address",
      };

    it('should successfully fetch a charge from Lightning Address', async () => {
        const response = await ZBD.createChargeFromLightningAddress(payload);
        
    
        expect(isFetchChargeFromLightningAddressResponseType(response)).toBeTruthy();
        expect(response.success).toBe(true);
        expect(response.data.amount).toBe(payload.amount);
    });

    describe('fetchChargeFromLightningAddress error scenarios', () => {
        const errorPayload: CreateChargeFromLightningAddressOptionsType  = {
            lnAddress: "aol@lol.xqz",
            lnaddress: "aol@lol.xqz",
            amount: "10000",
            description: "Sending to a Lightning Address",
          };
    
        it('should throw an error when given invalid Lightning Address', async () => {
            
            await expect(ZBD.createChargeFromLightningAddress(errorPayload)).rejects.toMatchObject({
                message: "Could not get lighning address info.",
                status: 400,
               })  


        });
    });
});
