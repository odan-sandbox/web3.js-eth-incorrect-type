import { Eth } from "web3-eth";

async function main(): Promise<void> {
  console.log("Eth", Eth);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  console.log("Eth", require("web3-eth").Eth);
}

main();

process.on("unhandledRejection", reason => {
  console.error(reason);
  process.exit(1);
});
