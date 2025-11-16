'use client';

import { Skeleton } from "@/components/ui/skeleton";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { cn } from "@/shared/lib/utils";

export default function ChatPage() {
    const t = useTranslations("ChatPage");

    // Simulando carregamento inicial, para futuro uso de estado e store
    const isLoading = false;
    const data = null; // vai receber dados do chat futuramente

    useEffect(() => {
        // Aqui futuramente será chamado o fetch da store de chat
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col min-h-screen gap-6 items-center justify-center">
                <Skeleton className="w-full max-w-xl h-[450px] rounded-lg" />
                <Skeleton className="w-2/3 h-12 rounded" />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-lg text-muted-foreground">
                    {t("noDataAvailable", { defaultValue: "Em breve você poderá conversar com contatos nesta página!" })}
                </p>
            </div>
        );
    }

    // Quando a funcionalidade estiver pronta, renderizará o chat aqui
    return (
        <div className={cn("flex flex-col w-full items-center justify-center")}>
            <h1 className="text-2xl font-bold mb-6">{t("title", { defaultValue: "Chat" })}</h1>
            {/* Chat component irá aqui futuramente */}
            <div className="text-center text-muted-foreground">Em desenvolvimento...</div>
        </div>
    );
}
