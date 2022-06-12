import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";

const config = {
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 300,
      },
    },
  },
  typechain: {
    target: "ethers-v5",
  },
  paths: {
    sources: "./src",
  },
};

export default config;
