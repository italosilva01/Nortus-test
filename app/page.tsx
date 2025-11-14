import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-zinc-900">{t('title')}</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h3 className="text-sm font-medium text-zinc-500">Total de Usuários</h3>
          <p className="mt-2 text-3xl font-bold text-zinc-900">1,234</p>
          <p className="mt-1 text-sm text-green-600">+12% do mês passado</p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h3 className="text-sm font-medium text-zinc-500">Relatórios</h3>
          <p className="mt-2 text-3xl font-bold text-zinc-900">89</p>
          <p className="mt-1 text-sm text-green-600">+5% do mês passado</p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h3 className="text-sm font-medium text-zinc-500">Dados Processados</h3>
          <p className="mt-2 text-3xl font-bold text-zinc-900">2.5 TB</p>
          <p className="mt-1 text-sm text-blue-600">+18% do mês passado</p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h3 className="text-sm font-medium text-zinc-500">Consultas</h3>
          <p className="mt-2 text-3xl font-bold text-zinc-900">45.2K</p>
          <p className="mt-1 text-sm text-green-600">+23% do mês passado</p>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-zinc-900">Atividades Recentes</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <p className="font-medium text-zinc-900">Novo relatório gerado</p>
              <p className="text-sm text-zinc-500">Há 2 horas</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Concluído
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
            <div>
              <p className="font-medium text-zinc-900">Dados sincronizados</p>
              <p className="text-sm text-zinc-500">Há 5 horas</p>
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
              Processando
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-zinc-900">Backup realizado</p>
              <p className="text-sm text-zinc-500">Há 1 dia</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
              Concluído
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

