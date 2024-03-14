import { useAutoAnimate } from '@formkit/auto-animate/react'
import { ReactNode } from 'react'

interface CarListProps {
  children: ReactNode
}

export function CarList({ children }: CarListProps) {
  const [parent] = useAutoAnimate()

  return (
    <div
      className="scrollbar-track-primaryapp-100 flex max-h-[660px] min-h-[550px] flex-col gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-highlight-300/20 md:grid md:grid-cols-1 md:gap-8 xl:grid-cols-2 2xl:grid-cols-3"
      ref={parent}
    >
      {children}
    </div>
  )
}
