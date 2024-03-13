import { Car, ChevronRight, Loader } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/button'
import { api } from '@/lib/axios'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function Signin() {
  // Recebendo o email por query parameter após o registro
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  async function handleSignIn({ email, password }: SignInFormSchema) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    try {
      await api.post('/sessions', {
        email,
        password,
      })
    } catch (error) {
      toast.error('Não foi possível se autenticar.')
    }
    // console.log(data)
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

          <form
            className="space-y-4 border-b pb-5"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
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
                placeholder="Sua senha"
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

          <Link
            to="/sign-up"
            className="group mt-5 flex items-center justify-between rounded-md border border-highlight-700/10 bg-highlight-500/5 px-6 py-4 hover:border-highlight-500 hover:brightness-125"
          >
            <div className="flex items-center gap-4">
              <Car className="size-6 text-highlight-300" />

              <div className="flex flex-col">
                <p>Não possui conta?</p>
                <span className="text-highlight-300 group-hover:underline group-hover:underline-offset-2">
                  Criar conta
                </span>
              </div>
            </div>

            <ChevronRight className="size-6 text-highlight-300" />
          </Link>
        </div>
      </div>
    </>
  )
}
