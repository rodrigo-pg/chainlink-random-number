import { ethers } from "hardhat";

async function main() {
    const randomNumber = await ethers.getContractAt("RandomNumber", process.env.CONTRACT_ADDRESS as string);

    console.log("Requesting words...");
    const requestTx = await randomNumber.requestRandomWords();
    requestTx.wait();

    console.log("Getting words...");
    const word = await randomNumber.s_randomWords(0);
    console.log("Word:", word.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});