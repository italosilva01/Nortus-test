import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { handleLogin } from "./actions"

export default async function LoginPage({
    searchParams,
}: {
    searchParams: { error?: string }
}) {
    const session = await auth()

    if (session) {
        redirect("/")
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md">
                <form
                    action={handleLogin}
                    className="space-y-6 rounded-lg border bg-white p-8 shadow-sm"
                >
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900">Login</h1>
                        <p className="mt-2 text-sm text-gray-600">
                            Entre com suas credenciais
                        </p>
                    </div>

                    {searchParams.error && (
                        <div className="rounded-md bg-red-50 border border-red-200 p-3">
                            <p className="text-sm text-red-800 text-center">
                                ❌ Usuário ou senha inválidos
                            </p>
                        </div>
                    )}

                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Usuário
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="teste@teste.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="123456"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Entrar
                    </button>

                    <div className="text-center text-xs text-gray-500">
                        <p>Teste: teste@teste.com / 123456</p>
                    </div>
                </form>
            </div>
        </div>
    )
}