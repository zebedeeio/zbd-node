import { zbd } from "@zbd/node";
import { TEST_API_KEY } from "../../src/constants";
import {
  StaticChargeDataResponseType,
  StaticChargeOptionsType,
  isStaticChargeDataResponseType,
} from "../../src/types/static-charges";

const ZBD = new zbd(TEST_API_KEY);

describe("createStaticCharge", () => {
  // Data for creating static charge
  const validStaticChargeData: StaticChargeOptionsType = {
    allowedSlots: 0,
    minAmount: "10000",
    maxAmount: "20000",
    description: "This is my static charge",
    internalId: "myInternalId1",
    callbackUrl: "https://my-website.com/zbd-callback",
    successMessage: "Congratulations your payment was successful!",
  };

  // Success
  it("should successfully create a static charge", async () => {
    const response = await ZBD.createStaticCharge(validStaticChargeData);
    expect(response.message).toBe("Successfully created Static Charge.");

    // Data Validation
    expect(isStaticChargeDataResponseType(response)).toBeTruthy();
  });

  describe("createStaticCharge error scenarios", () => {
    it("should throw an error given a faulty payload (no min max amount)", async () => {
      const invalidStaticChargeData: StaticChargeOptionsType = {
        allowedSlots: null,
        minAmount: "0",
        maxAmount: "0",
        description: "This is my static charge",
        internalId: "myInternalId1",
        callbackUrl: "https://my-website.com/zbd-callback",
        successMessage: "Congratulations your payment was successful!",
      };

      await expect(
        ZBD.createStaticCharge(invalidStaticChargeData)
      ).rejects.toMatchObject({
        message: "Error creating Static Charge.",
        status: 400,
      });
    });
  });
});
