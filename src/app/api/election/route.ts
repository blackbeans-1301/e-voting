export const GET = async (req: Request) => {
    const res =  await fetch('http://localhost:6969/api/voter/1/elections', {
        method: "GET",
    })
    // const result = await res.json()
    return res;
};
  