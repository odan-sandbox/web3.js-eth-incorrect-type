import { Eth } from "web3-eth";

describe("import", (): void => {
  it("is undefined", () => {
    expect(Eth).toBeUndefined();
  });
});

describe("require", () => {
  describe("without named export", () => {
    it("is defined", () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      expect(require("web3-eth")).toBeDefined();
    });
  });
  describe("with named export", () => {
    it("is undefined", () => {
      expect(require("web3-eth").Eth).toBeUndefined();
    });
  });
});
