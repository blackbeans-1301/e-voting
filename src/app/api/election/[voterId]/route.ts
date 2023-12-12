export const GET = async (
  req: Request,
  { params }: { params: { voterId: string } }
) => {
  const voterId = params.voterId;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/voter/${voterId}/elections`,
    {
      method: "GET",
    }
  );
  return res;
};
