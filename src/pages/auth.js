"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const token = searchParams.get("token");
    const email = searchParams.get("email");

    const fetchAuth = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth?token=${token}&email=${email}`
      );
      const data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        console.log("Auth Page status: ", response.status);
        router.push("/journal");
      } else {
        console.error("Authentication failed: ", data.message);
        router.push("/login");
      }
    };

    fetchAuth();
  }, [router]);

  return (
    <div className="mt-12 flex justify-center">
      <h2 className="text-5xl font-extrabold text-secondary">
        Authenticating <span className="loading loading-dots loading-lg"></span>
      </h2>
    </div>
  );
}
