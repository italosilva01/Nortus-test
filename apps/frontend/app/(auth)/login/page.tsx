import { auth } from "@/auth"
import { FormLogin } from "@/feature/auth/login/ui/FormLogin"
import { PanelChangeLanguage } from "@/feature/auth/login/ui/PanelChangeLanguage"
import { redirect } from "next/navigation"

export default async function LoginPage() {
    const session = await auth()

    if (session) {
        redirect("/")
    }

    return (
        <main className="flex gap-11 xl:gap-[60px] justify-between items-start mx-[65px] xl:my-5 my-6 2xl:max-w-[1920px] 2xl:mx-auto">
            <FormLogin />
            <PanelChangeLanguage />
        </main>
    )
}

