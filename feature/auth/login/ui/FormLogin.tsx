"use client"
import { handleLogin } from "@/app/login/actions"
import { FormInput } from "@/components/ui/form-input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import NortusLogo from "@/public/NortusLogo.svg"
import { Typography } from "@/components/ui/Typography"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { FormSchema, getLoginSchema } from "../lib/schemeValidation"
import { useForm } from "react-hook-form"
import type { Resolver } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export const FormLogin = () => {
    const t = useTranslations('LoginPage')
    const loginSchema = getLoginSchema(t)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const resolver = zodResolver(loginSchema) as Resolver<FormSchema>

    const form = useForm<FormSchema>({
        resolver,
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = form;
    return (
        <div className="flex flex-col gap-6 items-start bg-app-bg-dark h-max w-full xl:min-w-[1fr] 3xl:min-w-[805px] 3xl:max-w-[50.3125rem]">
            <Image
                src={NortusLogo as string}
                alt="Logo Nortus"
                width={174}
                height={54}
                priority
                unoptimized
            />
            <div className="mt-8 lg:mt-24 xl:mt-32 2xl:mt-40 flex flex-col xl:gap-16 gap-10 w-full">
                <div>
                    <Typography element="h1" fontColor="title" fontSize="4xl">{t('title')}</Typography>
                    <Typography element="p" fontFamily="inter" className="text-[1.25rem]" fontWeight="normal" fontColor="title">{t('description')}</Typography>
                </div>
                <form onSubmit={handleSubmit((data) => handleLogin(data))} className="w-full flex flex-col gap-7  2xl:max-w-[963px]">
                    <FormInput
                        type="text"
                        placeholder="email"
                        label={t('email')}
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <FormInput
                        type="password"
                        placeholder="Password"
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <div className="flex justify-between 2xl:my-4">
                        <div className="flex items-center gap-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-white font-bold xl:text-sm text-xs">{t('remember')}</Label>
                        </div>
                        <Link href="/forgot-password" className="text-blue-200 font-bold xl:text-sm text-xs">{t('forgot')}</Link>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-[68px] rounded-3xl"
                        variant="default"
                    >
                        {t('enter')}
                    </Button>
                </form>

            </div>
        </div>
    )
}