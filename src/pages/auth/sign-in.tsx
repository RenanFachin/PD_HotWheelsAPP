import { Loader } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/button'
import { api } from '@/lib/axios'
import { toast } from 'sonner'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>()

  async function handleSignIn(data: SignInFormSchema) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // await api.post('/sessions', {
    //   email: data.email,
    //   password: data.password,
    // })

    console.log(data)
  }

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

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="border-input  focus-within: flex h-10 w-full rounded-md border bg-primary-200/20 px-3 py-2 text-sm outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
                {...register('email')}
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
                {...register('password')}
              />
            </div>

            <Button
              disabled={isSubmitting}
              variant="secondary-full"
              type="submit"
            >
              {!isSubmitting ? (
                <Button.Text>Entrar</Button.Text>
              ) : (
                <Button.Icon>
                  <Loader className="size-6 animate-spin" />
                </Button.Icon>
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
