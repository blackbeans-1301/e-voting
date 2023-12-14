import { newVote } from "@/lib/common/ecc";
import BigInt from "big-integer";

export const POST = async (
  req: Request,
  { params }: { params: { electionId: string } }
) => {
  const { candidateNumber, publicKey } = await req.json();
  console.log("Candidate number is", candidateNumber);

  const convertedPublicKey = {
    a: BigInt(publicKey.a),
    b: BigInt(publicKey.b),
    p: BigInt(publicKey.p),
    q: BigInt(publicKey.q),
    P: {
      x: BigInt(publicKey.P.x),
      y: BigInt(publicKey.P.y),
      isFinite: publicKey.P.isFinite,
    },
    Q: {
      x: BigInt(publicKey.Q.x),
      y: BigInt(publicKey.Q.y),
      isFinite: publicKey.Q.isFinite,
    },
    numberOfCandidate: publicKey.numberOfCandidate,
    maximumOfVote: BigInt(publicKey.maximumOfVote),
    Ms: publicKey.Ms.map((item: any) => {
      return {
        x: BigInt(item.x),
        y: BigInt(item.y),
        isFinite: item,
      };
    }),
  };

  const createdVote = newVote(candidateNumber, convertedPublicKey);
  console.log(createdVote);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/voter/vote/${params.electionId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdVote),
    }
  );
  return res;
};
