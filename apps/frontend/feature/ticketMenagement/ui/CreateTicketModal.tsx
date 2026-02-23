"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTicketManagementData } from "@/feature/ticketMenagement/queries/useTicketMenagementData";
import { useTicketManagementStore } from "@/feature/ticketMenagement/stories/useTicketManagementStore";
import FormCreateTicket from "@/feature/ticketMenagement/ui/FormCreateTicket";
import { useTranslations } from "next-intl";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
const CreateTicketModal = () => {
  const t = useTranslations("TicketsManagementPage");
  const { isOpenModalCreateTicket, closeCreateTicketModal } =
    useTicketManagementStore();
  const { createTicketMutation } = useTicketManagementData();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeCreateTicketModal();
    }
  };

  const handleSubmit = async (data: FieldValues) => {
    const newTicketBody = {
      // TODO: when add BD, remove uuidv4() as string
      id: uuidv4() as string,
      status: "Aberto",
      client: data.nameClient,
      email: data.email,
      priority: data.priority,
      responsible: data.responsible,
      subject: data.subject,
      createdAt: new Date().toLocaleDateString("pt-BR"),
    };

    createTicketMutation.mutate(newTicketBody, {
      onSuccess: () => {
        toast.success(t("createTicket.success"));
      },
      onError: () => {
        toast.error(t("createTicket.error"));
      },
      onSettled: () => {
        closeCreateTicketModal();
      },
    });
  };

  return (
    <Dialog open={isOpenModalCreateTicket} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-max text-white lg:max-w-min bg-app-bg-dark">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl font-semibold">
            {t("createTicket.title")}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {t("createTicket.description")}
          </DialogDescription>
        </DialogHeader>
        <FormCreateTicket
          onSubmit={handleSubmit}
          onCancel={closeCreateTicketModal}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTicketModal;
