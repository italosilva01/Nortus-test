'use client';

import { useEffect } from 'react';

import ListTickets from '@/feature/ticketMenagement/ui/ListTickets';
import ResumeTotalTickets from '@/feature/ticketMenagement/ui/ResumeTotalTickets';
import { SkeletonTicketManagement } from '@/feature/ticketMenagement/ui/SkeletonTicketMenagement';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';

export default function TicketsManagementPage() {
    const { data, isLoading } = useTicketManagementStore();
    
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
        <div className="flex flex-col w-full xl:gap-y-5 2xl:gap-y-10">
            <ResumeTotalTickets />
            <ListTickets />            
        </div >
    );
}
