export const POST = async (req: Request) => {
    const data = await req.json()
    const res =  await fetch('http://localhost:6969/api/voter/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            name: data.name,
            password: data.password,
            age: data.age,
            email: data.email
        })
    })
    const result = await res.json()
    return Response.json(result);
};
  