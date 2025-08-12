"use client";

import { LoginForm } from "@/app/ui/auth/loginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { LoginSchema } from "@/app/ui/auth/schema";

export default function Login() {
  const loginHandler = async (data: LoginSchema) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("User logged in:", userCredential.user);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="mt-16 flex justify-center">
      <LoginForm onLoginAction={loginHandler} />
    </div>
  );
}
