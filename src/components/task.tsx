import { Check } from 'lucide-react'
import { ReactNode } from 'react'

interface TaskProps {
  children: ReactNode
}

export function Task({ children }: TaskProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="rounded-md border p-1">
        <Check className="size-3 text-green-500" />
      </div>
      <span className="text-sm">{children}</span>
    </div>
  )
}
