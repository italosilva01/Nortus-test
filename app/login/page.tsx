import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { FormLogin } from "@/feature/auth/login/ui/FormLogin"
import { PanelChangeLanguage } from "@/feature/auth/login/ui/PanelChangeLanguage"

export default async function LoginPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    const session = await auth()

    if (session) {
        redirect("/")
    }

    return (
        <main className="flex justify-between 2xl:gap-16 gap-10 w-full items-start p-10">
            <FormLogin />
            <PanelChangeLanguage />
        </main>
    )
}       