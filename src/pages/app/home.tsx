import { GitMergeIcon, Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/button'

export function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 py-12">
      <Helmet title="Home" />
      <span className="rounded-lg bg-primary-300/30 px-3 py-2 text-sm font-bold">
        🚀 Página inicial
      </span>

      <p className="text-3xl font-bold leading-tight tracking-tighter">
        Bem-vindo ao CRUD de HotWheels!
      </p>

      <p className="max-w-md text-center text-primary-500">
        Aplicação construída para a cadeira de desenvolvimento de sistemas
        front-end da PUC-RS
      </p>

      <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
        <Button variant="secondary">
          <Button.Icon>
            <Plus className="size-3" />
          </Button.Icon>

          <Button.Text>
            <Link to="/add-cars">Adicionar</Link>
          </Button.Text>
        </Button>

        <Button variant="primary">
          <Button.Icon>
            <GitMergeIcon className="size-3" />
          </Button.Icon>

          <Button.Text>
            <Link to="https://github.com/RenanFachin/PUCRS_hotwheels-CRUD">
              GitHub
            </Link>
          </Button.Text>
        </Button>
      </div>
    </div>
  )
}
