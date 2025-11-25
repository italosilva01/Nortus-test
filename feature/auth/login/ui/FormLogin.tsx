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
            <div className="w-full max-w-[8.125rem] xl:max-w-[9.375em] 2xl:max-w-[10.8825rem] h-auto">
                <Image
                    src={NortusLogo as string}
                    alt="Logo Nortus"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    priority
                    unoptimized
                />
            </div>
            <div className="mt-[7.5rem] 2xl:mt-[10rem] flex flex-col gap-[3.1875rem] 2xl:gap-[4.25rem] w-min">
                <div >
                    <Typography element="h1" fontColor="surface-solid" className="text-2xl xl:text-3xl 2xl:text-4xl line-height-[2.8631rem] letter-spacing-0px mb-3"
                    fontFamily="space-grotesk"
                    >{t('title')}</Typography>
                    <Typography element="p" fontFamily="inter" className="lg:text-base xl:text-lg 2xl:text-xl !line-height-[1.9375rem] letter-spacing-0.64px mt-1.5 " fontWeight="normal" fontColor="surface-solid">{t('description')}</Typography>
                </div>
                <form onSubmit={handleSubmit((data) => handleLogin(data))} className="w-full flex flex-col gap-7 md:max-w-[25rem] xl:max-w-[34.75rem] 2xl:max-w-[60.1875rem] xl:gap-[1.3125rem] 2xl:gap-7 mt-0.5">
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
                            <Checkbox id="terms" className="xl:size-[1.125rem] 2xl:size-[1.375rem] border-outline-solid font-medium border-[.0938rem]" />
                            <Label htmlFor="terms" className="text-white xl:text-[1rem] 2xl:!text-[1.125rem] !line-height-[1.5906rem] ml-4 !letter-spacing-0.13px font-space-grotesk">{t('remember')}</Label>
                        </div>
                        <Link href="/forgot-password" className="font-space-grotesk font-medium xl:text-[1rem] 2xl:!text-[1.125rem] !line-height-[1.5938rem] !letter-spacing-0.13px text-app-primary mr-5">{t('forgot')}</Link>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full xl:h-[3.25rem 2xl:h-[4.25rem] rounded-[1.25rem] border-[.0794rem] !text-button-solid border-outline-solid xl:!text-[1rem] 2xl:text-[18px] xl:mt-[1.125rem] 2xl:mt-6"
                        variant="default"
                    >
                        {t('enter')}
                    </Button>
                </form>

            </div>
        </div>
    )
}