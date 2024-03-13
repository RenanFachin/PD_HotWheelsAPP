import * as Dialog from '@radix-ui/react-dialog'
import { BadgeCheck, Eye, Pencil, Trash, X } from 'lucide-react'
import { useContext, useState } from 'react'
import { toast } from 'sonner'

import { CarsContext, CarsProps } from '@/contexts/carsContext'

import { AlertDialogButton } from './alert-dialog-button'
import { Button } from './button'

interface CarDetailProps extends CarsProps { }

export function CarDetail({ car }: CarDetailProps) {
  const { handleDeleteCar, handleUpdateCar } = useContext(CarsContext)

  const [isEditing, setIsEditing] = useState(false)

  const [editedBrand, setEditedBrand] = useState(car.brand)
  const [editedColor, setEditedColor] = useState(car.color)

  function handleUserEditCardInfo() {
    setIsEditing(true)
  }

  function handleSaveEdit() {
    handleUpdateCar({
      ...car,
      brand: editedBrand,
      color: editedColor,
    })

    setIsEditing(false)
    toast.success('Informações alteradas com sucesso!')
  }

  function handleDiscartEdit() {
    setIsEditing(false)
    toast.info('Você cancelou a edição das informações do carro.')
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === 'brand') {
      setEditedBrand(event.target.value)
    } else if (event.target.name === 'color') {
      setEditedColor(event.target.value)
    }
  }

  return (
    <Dialog.Root>
      <div className="m-2 flex max-h-[220px] flex-col rounded-md border p-5 shadow-md hover:ring-2 hover:ring-yellow-500/40">
        <div className="flex w-full items-center justify-between gap-3">
          <h1 className="font-bold">{car.name}</h1>

          <span className="rounded-lg bg-yellow-500/90 px-2 py-1 text-xs font-bold text-white">
            {car.year}
          </span>
        </div>

        <div className="mb-6 mt-10 w-full space-y-1">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-primary-400">Marca:</span>
            <h3 className="text-sm font-bold">{car.brand}</h3>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-primary-400">Cor:</span>
            <h3 className="text-sm font-bold">{car.color}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Dialog.Trigger className="flex-1 outline-none">
            <Button variant="primary" type="button" style={{ width: '100%' }}>
              <Button.Icon>
                <Eye className="size-3" />
              </Button.Icon>

              <Button.Text>Visualizar</Button.Text>
            </Button>
          </Dialog.Trigger>

          <AlertDialogButton car={car} />
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/70" />
          <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary-100 outline-none">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800/10 p-1.5 text-primary-600 hover:text-primary-500">
              <X className="size-3" />
            </Dialog.Close>

            <div className="flex flex-col rounded-md border p-10 shadow-md">
              <div className="flex w-full items-center justify-between gap-3">
                <h1 className="font-bold">{car.name}</h1>

                <span className="rounded-lg bg-yellow-500/90 px-2 py-1 text-xs font-bold text-white">
                  {car.year}
                </span>
              </div>

              <div className="mb-6 mt-10 w-full space-y-1">
                {isEditing ? (
                  <form className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-3">
                      <label className="flex flex-1 items-center justify-between gap-3 text-sm text-primary-400">
                        Marca:
                        <input
                          type="text"
                          name="brand"
                          value={editedBrand}
                          onChange={handleInputChange}
                          className="border-input focus-within: flex h-10 w-full max-w-40 rounded-md border bg-primary-300/20 px-3 py-2 text-right text-sm font-bold outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
                        />
                      </label>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <label className="flex flex-1 items-center justify-between gap-3 text-sm text-primary-400">
                        Cor:
                        <input
                          type="text"
                          name="color"
                          value={editedColor}
                          onChange={handleInputChange}
                          className="border-input focus-within: flex h-10 w-full max-w-40 rounded-md border bg-primary-300/20 px-3 py-2 text-right text-sm font-bold outline-none placeholder:text-primary-300 focus-within:ring-2 focus-within:ring-primary-800 focus-within:ring-offset-2"
                        />
                      </label>
                    </div>

                    <div className="flex justify-end gap-3">
                      <button
                        className="group flex h-[42px] items-center justify-center gap-2 rounded-md border border-green-400 bg-green-100 px-3 py-3 text-green-700 shadow-sm transition-all  hover:border-white hover:bg-green-400 hover:text-white disabled:cursor-not-allowed"
                        onClick={handleSaveEdit}
                      >
                        Salvar
                        <BadgeCheck className="size-3 " />
                      </button>

                      <button
                        className="group flex h-[42px] items-center justify-center gap-2 rounded-md border border-red-400 bg-red-100 px-3 py-3 text-red-700 shadow-sm transition-all hover:border-white hover:bg-red-400 hover:text-white disabled:cursor-not-allowed"
                        onClick={handleDiscartEdit}
                      >
                        Descartar
                        <Trash className="size-3 " />
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-primary-400">Marca:</span>
                      <h3 className="text-sm font-bold">{car.brand}</h3>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-primary-400">Cor:</span>
                      <h3 className="text-sm font-bold">{car.color}</h3>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {!isEditing && (
                  <>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => handleDeleteCar(car.id)}
                      style={{ flex: 1 }}
                    >
                      <Button.Icon>
                        <Trash className="size-3" />
                      </Button.Icon>

                      <Button.Text>Deletar</Button.Text>
                    </Button>
                    <button
                      className="group flex h-[42px] items-center justify-center gap-2 rounded-md border px-3 py-3 shadow-sm disabled:cursor-not-allowed"
                      onClick={handleUserEditCardInfo}
                    >
                      <Pencil className="size-3" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </div>
    </Dialog.Root>
  )
}
