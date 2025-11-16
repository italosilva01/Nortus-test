import Image from 'next/image';

import { PANELS_MAP } from '@/shared/lib/helpers';
import { TicketResume } from '@/shared/types/ticketManagement';
import { useTicketManagementStore } from '@/stores/useTicketManagementStore';

import { useTranslations } from 'next-intl';
import PanelTotal from './PanelTotal';

export default function ResumeTotalTickets() {
  const { data } = useTicketManagementStore();
  const resumeTotalTickets = data?.resumo;
  const t = useTranslations();
  return (
    <div className="flex gap-6 w-full">
      {PANELS_MAP.map((panel, index) => {
        const title = t(`TicketsManagementPage.resumeTotalTickets.${panel.key}`) as string;
        const value = index === PANELS_MAP.length - 1
          ? `${resumeTotalTickets?.timeAverageHours?.toString()}h`
          : resumeTotalTickets?.[panel.key as keyof TicketResume]?.toString() ?? '0';
        return (
          <PanelTotal 
            key={panel.key} 
            title={title} 
            value={value} 
            icon={<Image src={panel.icon} alt={title} width={24} height={24} />} 
          />
        );
      })}
    </div>
  );
}