import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { toast } from 'sonner'

import { CarFormSchema } from '@/components/car-form'
import { api } from '@/lib/axios'

export interface Car {
  brand: string
  color: string
  id: number
  name: string
  year: string
}

export interface CarsProps {
  car: Car
}

// Tipagem das informações que serão armazenadas dentro do contexto
interface CarsContextType {
  search: string
  cars: Car[]
  handleAddCar: (data: CarFormSchema) => void
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
  handleDeleteCar: (id: number) => void
  handleUpdateCar: (updatedCar: Car) => void
}

export const CarsContext = createContext({} as CarsContextType)

interface CarsContextProviderProps {
  children: ReactNode
}

export function CarsContextProvider({ children }: CarsContextProviderProps) {
  const [cars, setCars] = useState<Car[]>([])
  const [search, setSearch] = useState('')

  // BUSCANDO DADOS NA API
  async function fetchCars() {
    const response = await api.get<Car[]>('/cars')

    setCars(response.data)
  }

  // ADICIONNANDO UM REGISTRO -> FUNCIONANDO
  async function handleAddCar(data: CarFormSchema) {
    try {
      const newCar = {
        id: new Date().valueOf(),
        name: data.carName,
        year: data.carYear,
        brand: data.carBrand,
        color: data.carColor,
      }

      await api.post('/cars', newCar)

      toast.success('Carro adicionar com sucesso!')

      // setCars((prevCars) => [...prevCars, newCar])
      fetchCars()
    } catch {
      toast.error('Não foi possível cadastrar.')
    }
  }

  // DELETAR CARRO NA API -> FUNCIONANDO
  async function handleDeleteCar(id: number) {
    try {
      await api.delete(`/cars/${id}`)

      toast.success('Carro apagado com sucesso!')

      fetchCars()
    } catch (error) {
      toast.error('Erro ao excluir carro')
    }
  }

  // BUSCANDO OS DADOS NA LISTA DE CARROS
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  // MODIFICANDO SE FORMA FICTÍCIA, A API NÃO POSSUI UMA ROTA PARA ALTERAR DADOS
  function handleUpdateCar(updatedCar: Car) {
    const updatedCars = cars.map((car) =>
      car.id === updatedCar.id ? updatedCar : car,
    )
    setCars(updatedCars)
  }

  // BUSCANDO OS DADOS DA API -> FUNCIONANDO
  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <CarsContext.Provider
      value={{
        cars,
        search,
        handleSearch,
        handleDeleteCar,
        handleAddCar,
        handleUpdateCar,
      }}
    >
      {children}
    </CarsContext.Provider>
  )
}
