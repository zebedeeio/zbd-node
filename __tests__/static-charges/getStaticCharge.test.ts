import { TEST_API_KEY } from "../../src/constants";
import { zbd } from "../../src/zbd";
import {
  StaticChargeDataResponseType,
  isStaticChargeDataResponseType,
} from "../../src/types/static-charges";

const ZBD = new zbd(TEST_API_KEY);

describe("getStaticCharge", () => {
  const STATIC_CHARGE_ID = "45c225b1-022b-4a37-98d6-5a5568f78d11";

  it("should successfully fetch Static Charge details", async () => {
    const responseData = await ZBD.getStaticCharge(STATIC_CHARGE_ID);

    expect(responseData.message).toBe(
      "Successfully retrieved Static Charge data."
    );
    expect(responseData.data.id).toBe(STATIC_CHARGE_ID);

    // Data Validation
    expect(isStaticChargeDataResponseType(responseData)).toBeTruthy();
  });

  // Static Charge not found
  it("should return a 404 for a non-existent charge ID", async () => {
    const NON_EXISTENT_STATIC_CHARGE_ID = "invalid";
    await expect(
      ZBD.getCharge(NON_EXISTENT_STATIC_CHARGE_ID)
    ).rejects.toMatchObject({
      message: "No Charge records found with this ID.",
      status: 404,
    });
  });
});
