"use client";
import { ENDPOINTS } from "@/lib/url";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const signin_form_demo = () => {
  const router = useRouter();
  const [edu_mail, setEdu_mail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handle_Submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginData = {
      edu_mail: edu_mail,
      password: password,
    };

    setLoading(true);
    try {
      await axios
        .post(ENDPOINTS.v1.auth.login, loginData)
        .then((res) => {
          console.log(res.data);
          alert("Signed in successfully");
          setLoading(false);
          router.push("/dashboard");
        })
        .catch((err) => {
          console.error("Error response:", err.response);
          alert(err.response?.data?.message || "Failed to sign in");
          setError(err.response?.data?.message || "Failed to sign in");
          setLoading(false);
        });
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Failed to sign in");
    }
  };

  return (
    <form className="gap-4 flex flex-col " onSubmit={handle_Submit}>
      <Input
        disabled={loading}
        value={edu_mail}
        onChange={(e) => setEdu_mail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <Input
        disabled={loading}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <Button disabled={loading} className="w-full">
        {loading ? "Signing In..." : "Sign In"}
      </Button>
      <div>
        <p> Sample email : hackerman@hack.com</p>
        <p> Sample password : H@ak_M3_!F_U_c@n</p>
      </div>
    </form>
  );
};

export default signin_form_demo;
