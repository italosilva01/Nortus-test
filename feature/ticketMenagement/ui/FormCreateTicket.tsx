'use client';

import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/custom/FormInput';
import { FormTextarea } from '@/components/ui/custom/FormTextarea';
import { DialogFooter } from '@/components/ui/dialog';
import { createTicketSchema } from '@/feature/ticketMenagement/lib/schemeValidationCreateTicket';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { FormCombobox } from '../../../components/ui/custom/FormCombobox';

interface FormCreateTicketProps {
  onSubmit: (data: FieldValues) => void;
  onCancel: () => void;
}

const FormCreateTicket = ({ onSubmit, onCancel }: FormCreateTicketProps) => {
  const t = useTranslations('TicketsManagementPage');
  const schema = createTicketSchema(t);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      nameClient: '',
      email: '',
      priority: '',
      responsible: '',
      subject: '',
    },
  });

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = form;
  const inputClassName = 'bg-app-blue-200 border-none';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-4 mx-auto w-[500px] max-w-100 lg:max-w-112.5 xl:max-w-120 2xl:max-w-125"
    >
      <FormInput
        id="nameClient"
        type="text"
        title={t('createTicket.fields.name')}
        inputClassName={inputClassName}
        placeholder={t('createTicket.fields.namePlaceholder')}
        error={errors.nameClient?.message as string}
        {...register('nameClient')}
      />
      <FormInput
        id="email"
        type="email"
        title={t('createTicket.fields.email')}
        inputClassName={inputClassName}
        placeholder={t('createTicket.fields.emailPlaceholder')}
        error={errors.email?.message as string}
        {...register('email')}
      />

      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <FormCombobox
            title={t('createTicket.fields.priority')}
            options={[{ value: 'Urgente', label: 'low' }, { value: 'Média', label: 'medium' }, { value: 'high', label: 'high' }]}
            placeholder={t('createTicket.fields.priorityPlaceholder')}
            value={field.value}
            onValueChange={field.onChange}
            comboboxClassName={inputClassName}
            error={errors.priority?.message as string}
          />
        )}
      />
      
      <FormInput
        id="responsible"
        type="text"
        title={t('createTicket.fields.responsible')}
        inputClassName={inputClassName}
        placeholder={t('createTicket.fields.responsiblePlaceholder')}
        error={errors.responsible?.message as string}
        {...register('responsible')}
      />

      <FormTextarea
        id="subject"
        title={t('createTicket.fields.subject')}
        placeholder={t('createTicket.fields.subjectPlaceholder')}
        rows={4}
        inputClassName={inputClassName}
        error={errors.subject?.message as string}
        {...register('subject')}
      />

      <DialogFooter className="mt-4 gap-2 sm:gap-0">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-app-dark-blue-500 text-white hover:bg-app-dark-blue-500"
        >
          {t('createTicket.actions.cancel')}
        </Button>
        <Button
          type="submit"
          variant="default"
          className="bg-app-primary text-white hover:bg-app-primary/90"
        >
          {t('createTicket.actions.submit')}
        </Button>
      </DialogFooter>
    </form>
  );
};

export default FormCreateTicket;

