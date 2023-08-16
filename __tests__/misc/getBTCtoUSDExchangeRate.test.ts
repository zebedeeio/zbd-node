import { TEST_API_KEY } from "../../src/constants";
import {
  BTCUSDDataResponseType,
  isBtcUsdExchangeRateResponseType,
} from "../../src/types";
import { zbd } from "../../src/zbd";

const ZBD = new zbd(TEST_API_KEY);

describe("BTC to USD Exchange Rate", () => {
  it("should successfully fetch the latest BTC to USD exchange rate", async () => {
    const response = await ZBD.getBtcUsdExchangeRate();

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isBtcUsdExchangeRateResponseType(response)).toBeTruthy();
    expect(response.message).toBe(
      "Successfully retrieved BTC USD price ticker information."
    );
  });
});
