import { Helmet } from 'react-helmet-async'

import { Task } from '@/components/task'

export function About() {
  return (
    <div className="flex w-full flex-1 grid-cols-2 flex-col items-center gap-14 py-12 md:grid md:gap-0">
      <Helmet title="Sobre" />

      <div className="flex h-full flex-col items-center justify-center space-y-5 md:border-r">
        <span className="bg-primaryapp-300/30 rounded-lg px-3 py-2 text-sm font-bold">
          💡 Sobre
        </span>

        <p className="text-center text-3xl font-bold">CRUD de HotWheels!</p>

        <p className="text-primaryapp-500 max-w-md text-center">
          Aplicação construída para a cadeira de desenvolvimento de sistemas
          front-end da PUC-RS.
        </p>
      </div>

      <div className="flex flex-col items-center space-y-5">
        <span className="bg-primaryapp-300/30 rounded-lg px-3 py-2 text-sm font-bold">
          ✔️ Tasks
        </span>

        <div className="flex max-w-md flex-col items-start gap-4">
          <Task>
            <span className="font-bold underline">
              Implementar sistema de front-end
            </span>{' '}
            para uma coleção de carrinhos HotWheels
          </Task>

          <Task>
            Na fase 1 o projeto deve ser{' '}
            <span className="font-bold underline">estático</span>
          </Task>

          <Task>Criar um projeto React</Task>

          <Task>
            O projeto deve possuir componentes de entrada de dados para o
            formulário de cadastro
          </Task>

          <Task>
            O projeto deve possuir{' '}
            <span className="font-bold underline">validação</span> de dados do
            formulário
          </Task>

          <Task>
            O projeto deve possuir{' '}
            <span className="font-bold underline">feedbacks visuais</span> para
            o usuário
          </Task>

          <Task>
            Na fase 1: Deve possuir funcionalidades dinâmicas (listagem, busca,
            criação e exclusão)
          </Task>
        </div>
      </div>
    </div>
  )
}
