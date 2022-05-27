import { expect } from "chai";

import { testCircuit } from "./utils";

describe("Hello", function () {
  this.timeout(100000000);

  it("works", async () => {
    const [, z] = await testCircuit("src/circuits/Hello.circom", {
      x: 2,
      y: 3,
    });

    expect(z).to.frEq(6);
  });
});
