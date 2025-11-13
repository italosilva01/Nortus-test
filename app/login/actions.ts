"use server"

import { signIn } from "@/auth"
import { redirect } from "next/navigation"
import { AuthError } from "next-auth"

export const handleLogin = async (formData: FormData) => {
  try {
    await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirectTo: "/",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect("/login?error=CredenciaisInvalidas")
    }
    throw error
  }
}

