export const GET = async (req: Request) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/election`);
  return res;
};
