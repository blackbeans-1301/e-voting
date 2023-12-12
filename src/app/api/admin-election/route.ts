export const GET = async (req: Request) => {
    const res =  await fetch('http://localhost:6969/api/election', {
        method: "GET",
    })
    // const result = await res.json()
    return res;
};
  