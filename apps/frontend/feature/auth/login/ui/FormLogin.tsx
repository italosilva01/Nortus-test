'use client';
import { handleLogin } from '@/app/(auth)/login/actions';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput } from '@/components/ui/custom/FormInput';
import { Typography } from '@/components/ui/custom/Typography';
import { Label } from '@/components/ui/label';
import {
  FormSchema,
  getLoginSchema,
} from '@/feature/auth/login/lib/schemeValidation';
import nortusLogoImage from '@/public/NortusLogo.svg';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import type { Resolver } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export const FormLogin = () => {
  const t = useTranslations('LoginPage');
  const loginSchema = getLoginSchema(t);
  const resolver = zodResolver(loginSchema) as Resolver<FormSchema>;

  const form = useForm<FormSchema>({
    resolver,
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;

  return (
    <div className="flex flex-col items-start bg-app-bg-dark h-max py-[50px] pl-7">
      <div className="w-full max-w-32.5 xl:max-w-[9.375em] 2xl:max-w-[10.8825rem] h-auto">
        <Image
          src={nortusLogoImage}
          alt="Logo Nortus"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
          unoptimized
        />
      </div>
      <div className="mt-10 xl:mt-30 2xl:mt-40 flex flex-col gap-7 xl:gap-12.75 2xl:gap-17">
        <div>
          <Typography
            element="h1"
            fontColor="surface-solid"
            className="text-2xl xl:text-3xl 2xl:text-4xl line-height-[2.8631rem] letter-spacing-0px mb-3"
            fontFamily="space-grotesk"
          >
            {t('title')}
          </Typography>
          <Typography
            element="p"
            fontFamily="inter"
            className="lg:text-base xl:text-lg 2xl:text-xl !line-height-[1.9375rem] letter-spacing-0.64px mt-1.5 "
            fontWeight="normal"
            fontColor="surface-solid"
          >
            {t('description')}
          </Typography>
        </div>
        <form
          onSubmit={handleSubmit((data) => handleLogin(data))}
          className="w-full flex flex-col gap-4 md:max-w-80 lg:w-[764px] xl:max-w-139 2xl:max-w-[764px] xl:gap-5.25 2xl:gap-7 mt-0.5"
        >
          <FormInput
            type="text"
            placeholder="Usuário"
            label={t('username')}
            error={errors.username?.message}
            {...register('username')}
          />
          <FormInput
            type="password"
            placeholder="Senha"
            error={errors.password?.message}
            {...register('password')}
          />
          <div className="flex justify-between my-2">
            <div className="flex items-center">
              <Checkbox
                id="terms"
                className="xl:size-4.5 2xl:size-5.5 border-outline-solid font-medium border-[.0938rem]"
              />
              <Label
                htmlFor="terms"
                className="text-white xl:text-[1rem] 2xl:!text-[1.125rem] !line-height-[1.5906rem] ml-4 !letter-spacing-0.13px font-space-grotesk"
              >
                {t('remember')}
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="font-space-grotesk font-medium xl:text-[1rem] 2xl:!text-[1.125rem] !line-height-[1.5938rem] !letter-spacing-0.13px text-app-primary mr-5"
            >
              {t('forgot')}
            </Link>
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full xl:h-[3.25rem 2xl:h-17 rounded-[1.25rem] border-[.0794rem] !text-button-solid border-outline-solid xl:!text-[1rem] 2xl:text-[18px] xl:mt-[1.125rem] 2xl:mt-6"
            variant="default"
          >
            {t('enter')}
          </Button>
        </form>
      </div>
    </div>
  );
};
