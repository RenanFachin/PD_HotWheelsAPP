import { Car, ChevronRight, Loader } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/button'
import { api } from '@/lib/axios'

const signUpFormSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormSchema>()

  async function handleSignUp({ username, email, password }: SignUpFormSchema) {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000))
      await api.post('/users', {
        name: username,
        email,
        password,
      })

      toast.success('Usuário criado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${email}`),
        },
      })

      // console.log(data)
    } catch (error) {
      toast.error('Não foi possível cadastrar o usuário.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <div className="flex w-[400px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta
            </h1>
          </div>

          <form
            className="space-y-4 border-b pb-5"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold">
                Nome
              </label>
              <input
                type="username"
                id="username"
                placeholder="Seu nome"
                className="border-input  focus-within: bg-primaryapp-200/20 placeholder:text-primaryapp-300 focus-within:ring-primaryapp-800 flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-within:ring-2 focus-within:ring-offset-2"
                {...register('username')}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Seu e-mail"
                className="border-input  focus-within: bg-primaryapp-200/20 placeholder:text-primaryapp-300 focus-within:ring-primaryapp-800 flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-within:ring-2 focus-within:ring-offset-2"
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
                placeholder="Sua senha deve ter no mínimo 6 caracteres"
                className="border-input  focus-within: bg-primaryapp-200/20 placeholder:text-primaryapp-300 focus-within:ring-primaryapp-800 flex h-10 w-full rounded-md border px-3 py-2 text-sm outline-none focus-within:ring-2 focus-within:ring-offset-2"
                {...register('password')}
              />
            </div>

            <Button
              disabled={isSubmitting}
              variant="secondary-full"
              type="submit"
            >
              {!isSubmitting ? (
                <Button.Text>Cadastrar</Button.Text>
              ) : (
                <Button.Icon>
                  <Loader className="size-6 animate-spin" />
                </Button.Icon>
              )}
            </Button>
          </form>

          <Link
            to="/sign-in"
            className="group mt-5 flex items-center justify-between rounded-md border border-highlight-700/10 bg-highlight-500/5 px-6 py-4 hover:border-highlight-500 hover:brightness-125"
          >
            <div className="flex items-center gap-4">
              <Car className="size-6 text-highlight-300" />

              <div className="flex flex-col">
                <p>Já possui conta?</p>
                <span className="text-highlight-300 group-hover:underline group-hover:underline-offset-2">
                  Acessa a plataforma
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
