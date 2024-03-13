/* eslint-disable prettier/prettier */
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Trash } from 'lucide-react'
import { ButtonHTMLAttributes, useContext } from 'react'

import { CarsContext, CarsProps } from '@/contexts/carsContext'

interface AlertDialogButtonProps
  extends CarsProps,
  ButtonHTMLAttributes<HTMLButtonElement> { }

export function AlertDialogButton({ car, ...props }: AlertDialogButtonProps) {
  const { handleDeleteCar } = useContext(CarsContext)

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger className="outline-none" asChild>
        <button
          type="button"
          className="group flex h-[42px] items-center justify-center gap-2 rounded-md border border-highlight-300 bg-red-200/20 px-3 py-3 text-highlight-500 opacity-55 shadow-sm outline-none hover:border-white hover:bg-highlight-500 hover:text-white hover:opacity-100 focus-visible:ring-1 focus-visible:ring-highlight-500 disabled:cursor-not-allowed transition-all"
          {...props}
        >
          <Trash className="size-4" />
          <span className="sr-only">Deletar</span>
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow" />

        <AlertDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-[6px] bg-white p-[25px] text-primary-800 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:animate-contentShow focus:outline-none">
          <AlertDialog.Title className="text-lg font-black">
            Você tem certeza que deseja excluir este item?
          </AlertDialog.Title>

          <AlertDialog.Description className="text-primary-600">
            Caso você exclua, o carro será permantemente deletado do seu
            histórico.
          </AlertDialog.Description>

          <div className="flex justify-end gap-4">
            <AlertDialog.Cancel asChild>
              <button className="group flex items-center justify-center gap-2 rounded-md border px-3 py-2 shadow-sm outline-none focus-within:ring-2 focus-within:ring-primary-900/40 disabled:cursor-not-allowed">
                Cancelar
                <span className="sr-only">Cancelar</span>
              </button>
            </AlertDialog.Cancel>

            <AlertDialog.Cancel asChild>
              <button
                className="group flex items-center justify-center gap-2 rounded-md border border-highlight-300 bg-red-200/20 px-3 py-2 text-highlight-500 shadow-sm outline-none focus-within:ring-2 focus-within:ring-primary-900/40 hover:border-white hover:bg-highlight-500 hover:text-white hover:opacity-100 focus-visible:ring-1 focus-visible:ring-highlight-500 disabled:cursor-not-allowed"
                onClick={() => handleDeleteCar(car.id)}
              >
                Deletar
                <span className="sr-only">Confirmação do deletar</span>
              </button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
