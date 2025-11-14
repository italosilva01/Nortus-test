import { PanelPerformance } from '@/components/ui/custom/PanelPerformance';

export default function Home() {

  return (
    <div className="flex flex-col gap-6 bg-">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <PanelPerformance title="ARPU" value="R$ 320,50" diffLastMonth="+12% do mês passado" positive={true} />
      </div>
    </div>
  );
}

