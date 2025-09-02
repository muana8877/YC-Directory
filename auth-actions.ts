"use server";

import { signIn, signOut } from "@/auth";

// These are safe to use as <form action={...}>
export async function signInWithGithub() {
  return await signIn("github");
}

export async function signOutUser() {
  return await signOut();
}
