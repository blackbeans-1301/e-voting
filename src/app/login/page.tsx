"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("voter")) {
      router.push("/voter-dashboard");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data: { voterId: number; name: string } = await res.json();
      localStorage.setItem("voter", JSON.stringify(data));
      router.push("/voter-dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border p-2 rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="mt-4 float-right">
            <Link href="/sign-up">
              <p>Sign up?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
