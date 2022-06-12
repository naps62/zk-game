import { expect } from "chai";
import { groth16 } from "snarkjs";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

import { HelloVerifier, HelloVerifier__factory } from "../../typechain-types";
import { prove } from "./utils";

describe("HelloVerifier", function () {
  this.timeout(100000000);

  let owner: SignerWithAddress;
  let verifier: HelloVerifier;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();
    verifier = await new HelloVerifier__factory(owner).deploy();
  });

  it("works", async () => {
    const inputs = { x: 2, y: 3 };

    const { a, b, c, publicSignals } = await prove("Hello", inputs);

    expect(await verifier.verifyProof(a, b, c, publicSignals)).to.be.true;
  });
});
