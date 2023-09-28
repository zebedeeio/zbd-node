import { TEST_API_KEY } from "../../src/constants";
import {
  GamertagTransactionDataResponseType,
  isGamertagTransactionDataResponseType,
} from "../../src/types";
import { zbd } from "../../src/zbd";

const ZBD = new zbd(TEST_API_KEY);

describe("Fetch Gamertag Transaction Details By ID", () => {
  const TEST_TRANSACTION_ID = "3418e871-05f6-4745-b12b-ccd53da9c4d1";
  const NON_EXISTENT_TRANSACTION_ID = "903883f2-67d9-4707-a21b-ddff004fe041";

  it("should successfully fetch transaction details by ID", async () => {
    const response = await ZBD.getGamertagTransaction(TEST_TRANSACTION_ID);

    expect(response).toBeDefined();
    expect(response.success).toBe(true);

    expect(isGamertagTransactionDataResponseType(response)).toBeTruthy();
  });

  describe("fetchGamertagTransactionDetailsByID error scenarios", () => {
    it("should fail to fetch transaction details given false ID", async () => {
      const response = await ZBD.getGamertagTransaction(
        NON_EXISTENT_TRANSACTION_ID
      );

      expect(response).toBeDefined();
      expect(response.success).toBe(true);
      expect(response.message).toBe("Transaction not found");
    });
  });
});
