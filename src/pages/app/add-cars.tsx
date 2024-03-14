import { Helmet } from 'react-helmet-async'

import { CarForm } from '@/components/car-form'

export function AddCars() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-5 py-12">
      <Helmet title="Adicionar carros" />
      <div className="flex flex-col items-center">
        <h1 className="flex items-center rounded-lg px-3 py-2 text-2xl font-bold">
          Adicionar carro
        </h1>

        <p className="text-primaryapp-500 max-w-md text-center">
          Formulário para adição de carro ao sistema.
        </p>
      </div>

      <CarForm />
    </div>
  )
}
