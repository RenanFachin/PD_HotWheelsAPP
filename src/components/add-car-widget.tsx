import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

import { CarForm } from './car-form'

interface AddCarWidgetProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function AddCarWidget({ ...props }: AddCarWidgetProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="hover:highlight-500 group  rounded-full border border-highlight-300 p-5 text-highlight-500 shadow-sm transition-all hover:scale-110"
          {...props}
        >
          <Plus className="size-6 group-hover:scale-110" />
          <span className="sr-only">Adicionar carro</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 data-[state=open]:animate-overlayShow" />

        <Dialog.Content className="bg-primaryapp-100 fixed left-1/2 top-1/2 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md outline-none">
          <Dialog.Title className="text-center text-xl font-bold">
            Adicionar carro
          </Dialog.Title>

          <Dialog.Close className="text-primaryapp-600 hover:text-primaryapp-500 absolute right-0 top-0 bg-slate-800/10 p-2">
            <X className="size-3" />
          </Dialog.Close>

          <CarForm />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
