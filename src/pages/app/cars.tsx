/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import { CarDetail } from '@/components/car-detail'
import { CarForm } from '@/components/car-form'
import { CarList } from '@/components/car-list'
import { CarsContext } from '@/contexts/carsContext'


export function Cars() {
  const { handleSearch, cars, search } = useContext(CarsContext)

  const filteredCars =
    search !== ''
      ? cars.filter((car) =>
        car.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || car.color.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || car.brand.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      )
      : cars

  return (
    <div className="flex md:grid w-full flex-1 md:grid-cols-1 lg:grid-cols-custom flex-col items-center py-12">
      <Helmet title="Sobre" />

      <div className="flex h-full flex-col items-center justify-center space-y-5 lg:border-r-2 border-r-primary-200/50 sm:hidden lg:flex">
        <div className="flex flex-col items-center">
          <h1 className="flex items-center rounded-lg px-3 py-2 text-2xl font-bold tracking-tight">
            Adicionar carro
          </h1>

          <p className="max-w-md text-center text-primary-500">
            Formulário para adição de carro ao sistema.
          </p>
        </div>
        <CarForm />
      </div>

      <div className="md:px-32 w-full mt-20 md:mt-0">
        <form className="mb-10">
          <input
            type="text"
            className="w-full border-b-2 bg-transparent md:text-2xl font-semibold tracking-tight outline-none placeholder:text-primary-600 placeholder:text-xl"
            placeholder="Busque seus carros cadastrados"
            onChange={handleSearch}
          />
        </form>

        <CarList>
          {/* LEMBRAR DE UTILIZAR O CAR DO STATE PARA PERCORRER COM MAP */}
          {cars.length > 0 ? (
            filteredCars.map((car) => {
              return (
                <CarDetail
                  key={car.id}
                  car={car}
                />
              )
            })
          ) : (
            <div className="col-span-3 mx-auto">
              <h2 className="text-center text-3xl font-bold">
                Lista de carro vazia!
              </h2>
              <p className="text-primary-400">
                Parece que você não tem nenhum carro cadastrado até o momento
              </p>
            </div>
          )}
        </CarList>
      </div>
    </div>
  )
}
