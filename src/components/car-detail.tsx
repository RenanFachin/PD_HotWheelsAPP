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
            <span className="text-primaryapp-400 text-sm">Marca:</span>
            <h3 className="text-sm font-bold">{car.brand}</h3>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-primaryapp-400 text-sm">Cor:</span>
            <h3 className="text-sm font-bold">{car.color}</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Dialog.Trigger className="flex-1 outline-none">
            <Button
              variant="primaryapp"
              type="button"
              style={{ width: '100%' }}
            >
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
          <Dialog.Content className="bg-primaryapp-100 fixed left-1/2 top-1/2 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md outline-none">
            <Dialog.Close className="text-primaryapp-600 hover:text-primaryapp-500 absolute right-0 top-0 bg-slate-800/10 p-1.5">
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
                      <label className="text-primaryapp-400 flex flex-1 items-center justify-between gap-3 text-sm">
                        Marca:
                        <input
                          type="text"
                          name="brand"
                          value={editedBrand}
                          onChange={handleInputChange}
                          className="border-input focus-within: bg-primaryapp-300/20 placeholder:text-primaryapp-300 focus-within:ring-primaryapp-800 flex h-10 w-full max-w-40 rounded-md border px-3 py-2 text-right text-sm font-bold outline-none focus-within:ring-2 focus-within:ring-offset-2"
                        />
                      </label>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <label className="text-primaryapp-400 flex flex-1 items-center justify-between gap-3 text-sm">
                        Cor:
                        <input
                          type="text"
                          name="color"
                          value={editedColor}
                          onChange={handleInputChange}
                          className="border-input focus-within: bg-primaryapp-300/20 placeholder:text-primaryapp-300 focus-within:ring-primaryapp-800 flex h-10 w-full max-w-40 rounded-md border px-3 py-2 text-right text-sm font-bold outline-none focus-within:ring-2 focus-within:ring-offset-2"
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
                      <span className="text-primaryapp-400 text-sm">
                        Marca:
                      </span>
                      <h3 className="text-sm font-bold">{car.brand}</h3>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-primaryapp-400 text-sm">Cor:</span>
                      <h3 className="text-sm font-bold">{car.color}</h3>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2">
                {!isEditing && (
                  <>
                    <Button
                      variant="primaryapp"
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
