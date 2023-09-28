import { TEST_API_KEY } from "../../src/constants";
import {
  ProdIPSDataResponseType,
  isApiProductionIPsResponseType,
} from "../../src/types/misc";
import { zbd } from "../../src/zbd";

const ZBD = new zbd(TEST_API_KEY);

describe("API Production IPs", () => {
  it("should successfully fetch the list of production IPs", async () => {
    const response = await ZBD.getZBDProdIps();

    expect(response).toBeDefined();
    expect(response.success).toBe(true);
    expect(isApiProductionIPsResponseType(response)).toBeTruthy();
    expect(Array.isArray(response.data.ips)).toBe(true);
  });
});
