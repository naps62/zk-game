import { expect, use, Assertion } from "chai";
import { F1Field, Scalar } from "ffjavascript";
import { wasm as wasm_tester } from "circom_tester";

declare global {
  export namespace Chai {
    interface Assertion {
      frEq(expected: number | bigint): void;
    }
  }
}

use((_chai, utils) => {
  Assertion.addMethod("frEq", function (other) {
    const obj = utils.flag(this, "object");

    expect(Fr.eq(Fr.e(obj), Fr.e(6))).to.be.true;
  });
});

const p = Scalar.fromString(
  "21888242871839275222246405745257275088548364400416034343698204186575808495617"
);

const Fr = new F1Field(p);

const testCircuit = async (path: string, input: any): Promise<any> => {
  const circuit = await wasm_tester(path);
  await circuit.loadConstraints();

  const witness = await circuit.calculateWitness(input, true);

  expect(Fr.eq(Fr.e(witness[0]), Fr.e(1))).to.be.true;

  return witness;
};

export { Fr, testCircuit };
