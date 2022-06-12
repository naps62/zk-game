import { groth16 } from "snarkjs";

export async function prove(
  circuitName: string,
  inputs: Record<string, number>
): Promise<any> {
  const { proof, publicSignals } = await groth16.fullProve(
    inputs,
    `build/circom/${circuitName}/${circuitName}_js/${circuitName}.wasm`,
    `build/circom/${circuitName}/final.zkey`
  );

  return {
    a: proof.pi_a.slice(0, 2),
    b: [
      [proof.pi_b[0][1], proof.pi_b[0][0]],
      [proof.pi_b[1][1], proof.pi_b[1][0]],
    ],
    c: proof.pi_c.slice(0, 2),
    publicSignals,
  };
}
