import { useTranslations } from 'next-intl';

export default function UsersPage() {
  const t = useTranslations('Sidebar');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-zinc-900">{t('users')}</h1>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-zinc-900">Lista de Usuários</h2>
        <p className="mt-2 text-zinc-500">
          Esta é uma página de exemplo. Todas as novas rotas criadas automaticamente terão o layout com Sidebar e Header.
        </p>
      </div>
    </div>
  );
}

