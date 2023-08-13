import { TEST_API_KEY } from '../../src/constants';
import { FetchUserIdByGamertagDataResponseType, isFetchUserIdByGamertagDataResponseType } from '../../src/types';
import { zbd } from '../../src/zbd';

const ZBD = new zbd(TEST_API_KEY);

describe('Fetch User ID By Gamertag', () => {
  const testGamertag = "foxp2";

  it('should successfully fetch user ID for a valid gamertag', async () => {
    const response = await ZBD.getUserIdByGamertag(testGamertag);
    
    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isFetchUserIdByGamertagDataResponseType(response)).toBeTruthy();
  });

  it('should return an error for an invalid gamertag', async () => {
    const invalidGamertag = "nonExistentTagč";
    
    await expect(ZBD.getUserIdByGamertag(invalidGamertag)).rejects.toMatchObject({
      message: "No user found with this gamertag",
      status: 400,
     }) 

  });
});

