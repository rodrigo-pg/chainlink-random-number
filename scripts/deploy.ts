import { ethers } from "hardhat";

async function main() {
  const RandomNumber = await ethers.getContractFactory("RandomNumber");
  const randomNumber = await RandomNumber.deploy(Number(process.env.SUBSCRIPTION_ID));

  await randomNumber.deployed();

  console.log("RandomNumber deployed to:", randomNumber.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});