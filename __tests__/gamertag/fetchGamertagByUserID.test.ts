import { TEST_API_KEY } from '../../src/constants';
import { FetchGamertagByUserIdDataResponseType, isFetchGamertagByUserIDDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Fetch Gamertag By User ID', () => {
  const testUserID = "ec9b38d5-b126-4307-9d1e-8aa0dfab5d7e";  
  const fakeUserID = "202020"

  it('should successfully fetch a gamertag by user ID', async () => {
    const response = await ZBD.getGamertagByUserId(testUserID); 

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(response.message).toBe("Fetched gamertag from uuid");

    // Data Validation
    expect(isFetchGamertagByUserIDDataResponseType(response)).toBeTruthy();
  });

  describe('fetchGamertagByUserID error scenarios', () => {
    it('should throw an error given a non-existent user ID', async () => {
      
     await expect(ZBD.getGamertagByUserId(fakeUserID)).rejects.toMatchObject({
      message: "No gamertag found with this uuid",
      status: 400,
     })  
  
    });
  });
});
