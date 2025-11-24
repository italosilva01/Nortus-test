"use client"
import { handleLogin } from "@/app/(auth)/login/actions"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FormInput } from "@/components/ui/custom/FormInput"
import { Typography } from "@/components/ui/custom/Typography"
import { Label } from "@/components/ui/label"
import { FormSchema, getLoginSchema } from "@/feature/auth/login/lib/schemeValidation"
import NortusLogo from "@/public/NortusLogo.svg"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import type { Resolver } from "react-hook-form"
import { useForm } from "react-hook-form"

export const FormLogin = () => {
    const t = useTranslations('LoginPage')
    const loginSchema = getLoginSchema(t)
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
        <div className="flex flex-col items-start bg-app-bg-dark h-max">
            <Image
                src={NortusLogo as string}
                alt="Logo Nortus"
                width={174}
                height={54}
                priority
                unoptimized
            />
            <div className="mt-8 lg:mt-24 xl:mt-32 2xl:mt-40 flex flex-col gap-[4.25rem] w-full">
                <div>
                    <Typography element="h1" fontColor="surface-solid" className="text-[2.2269rem] !line-height-[2.8631rem] letter-spacing-0px "
                    fontFamily="space-grotesk"
                    >{t('title')}</Typography>
                    <Typography element="p" fontFamily="inter" className="text-[1.25rem] !line-height-[1.875rem] letter-spacing-0.64px" fontWeight="normal" fontColor="surface-solid">{t('description')}</Typography>
                </div>
                <form onSubmit={handleSubmit((data) => handleLogin(data))} className="w-full flex flex-col gap-7 2xl:max-w-[963px]">
                    <FormInput
                        type="text"
                        placeholder="Usuário"
                        label={t('email')}
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <FormInput
                        type="password"
                        placeholder="Senha"
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <div className="flex justify-between my-2">
                        <div className="flex items-center">
                            <Checkbox id="terms" className="size-[22px] border-outline-solid font-medium border-[1.27px]" />
                            <Label htmlFor="terms" className="text-white !text-[1.125rem] !line-height-[25.45px] ml-4 !letter-spacing-0.13px font-space-grotesk">{t('remember')}</Label>
                        </div>
                        <Link href="/forgot-password" className="font-space-grotesk font-medium !text-[1.125rem] !line-height-[25.45px] !letter-spacing-0.13px text-app-primary">{t('forgot')}</Link>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full h-[68px] rounded-[20px] border-[1.27px] !text-button-solid border-outline-solid text-[18px]"
                        variant="default"
                    >
                        {t('enter')}
                    </Button>
                </form>

            </div>
        </div>
    )
}