'use client';

import PanelTotal from '@/feature/ticketMenagement/ui/PanelTotal';
import TicketIcon from '@/public/icons/ticketManegement/ticketOpenIcon.svg';
import Image from 'next/image';

export default function TicketsManagementPage() {
    return (
        <div className="flex flex-col w-full border">
            <div className="flex gap-6 w-full">
                <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
                <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
                <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
                <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
            </div>

        </div >
    );
}
