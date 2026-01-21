'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import FormCreateTicket from '@/feature/ticketMenagement/ui/FormCreateTicket';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';
import { useTranslations } from 'next-intl';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
const CreateTicketModal = () => {
  const t = useTranslations('TicketsManagementPage');
  const { isOpenModalCreateTicket, closeCreateTicketModal, addTicket } = useTicketManagementStore();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeCreateTicketModal();
    }
  };


  const handleSubmit = (data: FieldValues) => {
    addTicket({
      id: uuidv4() as string,
      status: "Aberto" ,
      client: data.nameClient,
      email: data.email,
      priority: data.priority,
      responsible: data.responsible,
      subject: data.subject,
      createdAt: new Date().toLocaleDateString('pt-BR'),
    });

    toast.success(t('createTicket.success'));
    closeCreateTicketModal();
  };

  return (
    <Dialog open={isOpenModalCreateTicket} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-max text-white lg:max-w-min bg-app-bg-dark">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-semibold">
            {t('createTicket.title')}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {t('createTicket.description')}
          </DialogDescription>
        </DialogHeader>
        <FormCreateTicket onSubmit={handleSubmit} onCancel={closeCreateTicketModal} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTicketModal;
