"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const AuthSync = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.user?.username) {
            localStorage.setItem('username', session.user.username);
        } else if (status === "unauthenticated") {
            localStorage.removeItem('username');
        }
    }, [session, status]);

    return null;
};

