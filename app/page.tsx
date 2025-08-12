"use client";

import { Container } from "@/app/ui/container";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "@/firebase";

export default function Home() {
  // const registerUser = async (email: string, password: string) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password,
  //     );
  //     console.log("User registered:", userCredential.user);
  //   } catch (error: any) {
  //     console.error(error.message);
  //   }
  // };
  //
  // const logoutUser = async () => {
  //   await signOut(auth);
  // };
  //
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log("Logged in as:", user.email);
  //   } else {
  //     console.log("Not logged in");
  //   }
  // });

  return <Container>hello</Container>;
}
