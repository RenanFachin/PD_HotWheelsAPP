import { Car, ChevronRight, Loader } from 'lucide-react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/button'
import { AuthContext } from '@/contexts/auth-context'

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function Signin() {
  // Recebendo o email por query parameter após o registro
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { signIn } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormSchema>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  async function handleSignIn(data: SignInFormSchema) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    try {
      await signIn(data)

      navigate('/')
    } catch (error) {
      toast.error('Não foi possível se autenticar.')
    }
    // console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-3 md:p-8 ">
        <div className="flex  flex-col items-center justify-center gap-6 px-4 md:w-[400px] md:px-0">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
              Acesse sua conta
            </h1>
          </div>

          <form
            className="w-full space-y-4 border-b pb-5"
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
                className="focus-within:  flex h-10 w-full rounded-md border border-input bg-primaryapp-200/20 px-3 py-2 text-sm outline-none placeholder:text-primaryapp-300 focus-within:ring-2 focus-within:ring-primaryapp-800 focus-within:ring-offset-2"
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
                className="focus-within:  flex h-10 w-full rounded-md border border-input bg-primaryapp-200/20 px-3 py-2 text-sm outline-none placeholder:text-primaryapp-300 focus-within:ring-2 focus-within:ring-primaryapp-800 focus-within:ring-offset-2"
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
            className="group mt-5 flex items-center justify-between rounded-md border border-highlight-700/10 bg-highlight-500/5 px-3 py-2 hover:border-highlight-500 hover:brightness-125 md:px-6 md:py-4"
          >
            <div className="flex items-center gap-4">
              <Car className="size-4 text-highlight-300 md:size-6" />

              <div className="flex flex-col text-xs md:text-base">
                <p>Não possui conta?</p>
                <span className="text-highlight-300 group-hover:underline group-hover:underline-offset-2">
                  Criar conta
                </span>
              </div>
            </div>

            <ChevronRight className="size-4 text-highlight-300 md:size-6" />
          </Link>
        </div>
      </div>
    </>
  )
}
