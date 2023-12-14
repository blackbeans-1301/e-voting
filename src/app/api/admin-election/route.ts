export const fetchCache = "force-no-store";

export const GET = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/election`);
  return res;
};
