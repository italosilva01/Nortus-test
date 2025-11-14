"use server"

import { signIn } from "@/auth"
import { redirect } from "next/navigation"
import { AuthError } from "next-auth"
import { FormSchema } from "@/feature/auth/login/lib/schemeValidation"

export const handleLogin = async (data: FormSchema) => {
  try {
    await signIn("credentials", {
      username: data.email,
      password: data.password,
      redirectTo: "/",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect("/login?error=CredenciaisInvalidas")
    }
    throw error
  }
}

