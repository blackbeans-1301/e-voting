export const GET = async (req: Request) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/voter/logout`);
  return res;
};
