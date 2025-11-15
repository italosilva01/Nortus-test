import TicketIcon from '@/public/icons/ticketManegement/ticketOpenIcon.svg';
import Image from 'next/image';
import PanelTotal from "./PanelTotal";
export default function ResumeTotalTickets() {
    return (
      <div className="flex gap-6 w-full">
      <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
      <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
      <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
      <PanelTotal title="Total de Tickets" value="24" icon={<Image src={TicketIcon as string} alt="Ticket Icon" />} />
  </div>
    );
}