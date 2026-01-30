'use client';

import { useEffect } from 'react';

import CreateTicketModal from '@/feature/ticketMenagement/ui/CreateTicketModal';
import ListTickets from '@/feature/ticketMenagement/ui/ListTickets';
import ResumeTotalTickets from '@/feature/ticketMenagement/ui/ResumeTotalTickets';
import { SkeletonTicketManagement } from '@/feature/ticketMenagement/ui/SkeletonTicketMenagement';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';

export default function TicketsManagementPage() {
    const isLoading = useTicketManagementStore((state) => state.isLoading);
    const data = useTicketManagementStore((state) => state.data);

    useEffect(() => {
        useTicketManagementStore.getState().fetchTicketManagementData();
    }, []);

    if (isLoading) {
        return <SkeletonTicketManagement />;
    }
    if (!data) {
        return <div>Nenhum dado encontrado</div>;
    }
    return (
        <div className="flex flex-col w-full gap-y-5 2xl:gap-y-10">
            <CreateTicketModal />
            <ResumeTotalTickets />
            <ListTickets />
        </div >
    );
}
