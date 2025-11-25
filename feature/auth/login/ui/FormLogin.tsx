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
            <div className="xl:w-[130px] 2xl:w-[10.8825rem] h-auto">
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
            <div className="mt-[120px] 2xl:mt-[160px] flex flex-col gap-[3.1875rem] 2xl:gap-[68px] w-min">
                <div >
                    <Typography element="h1" fontColor="surface-solid" className="text-[2.2269rem] line-height-[45.81px] letter-spacing-0px"
                    fontFamily="space-grotesk"
                    >{t('title')}</Typography>
                    <Typography element="p" fontFamily="inter" className="text-[1.2725rem] !line-height-[30.54px] letter-spacing-0.64px mt-1.5 " fontWeight="normal" fontColor="surface-solid">{t('description')}</Typography>
                </div>
                <form onSubmit={handleSubmit((data) => handleLogin(data))} className="w-full flex flex-col gap-7 max-w-[34.75rem] 2xl:max-w-[60.1875em] xl:gap-[1.3125rem] 2xl:gap-7">
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
                            <Checkbox id="terms" className="xl:size-[18px] 2xl:size-[22px] border-outline-solid font-medium border-[1.27px]" />
                            <Label htmlFor="terms" className="text-white xl:text-[1rem] 2xl:!text-[1.125rem] !line-height-[25.45px] ml-4 !letter-spacing-0.13px font-space-grotesk">{t('remember')}</Label>
                        </div>
                        <Link href="/forgot-password" className="font-space-grotesk font-medium xl:text-[1rem] 2xl:!text-[1.125rem] !line-height-[25.45px] !letter-spacing-0.13px text-app-primary mr-5">{t('forgot')}</Link>
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        className="w-full xl:h-[52px] 2xl:h-[68px] rounded-[20px] border-[1.27px] !text-button-solid border-outline-solid xl:!text-[1rem] 2xl:text-[18px] xl:mt-[18px] 2xl:mt-6"
                        variant="default"
                    >
                        {t('enter')}
                    </Button>
                </form>

            </div>
        </div>
    )
}