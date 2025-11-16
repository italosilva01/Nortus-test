'use client';

import { useEffect } from 'react';

import ResumeTotalTickets from '@/feature/ticketMenagement/ui/ResumeTotalTickets';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';
import ListTickets from '../../feature/ticketMenagement/ui/ListTickets';

export default function TicketsManagementPage() {
    const { data, isLoading } = useTicketManagementStore();
    
    useEffect(() => {
        useTicketManagementStore.getState().fetchTicketManagementData();
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
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
