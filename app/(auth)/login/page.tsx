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
        <main className="flex justify-between w-full items-start 2xl:mx-13.75 2xl:my-[24px] px-[2.5rem] py-[50px]">
            <FormLogin />
            <PanelChangeLanguage />
        </main>
    )
}

