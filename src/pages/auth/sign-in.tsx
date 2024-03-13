import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/button'

export function Signin() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[400px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acesse sua conta
            </h1>
          </div>

          <form className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-200/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-xs font-bold">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-200/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
              />
            </div>

            <Button variant="secondary-full" type="submit">
              <Button.Text>Entrar</Button.Text>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
