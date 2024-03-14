import { ChevronDown, LogOut, Plus, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-md border px-3 py-1">
          <UserRound className="size-4" />

          <span>Renan</span>

          <ChevronDown className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Renan Fachin</span>
          <span className="text-muted-foreground text-xs font-normal">
            renan@email.com
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <UserRound className="mr-2 size-4" />
          <span>Perfil do usuário</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Plus className="mr-2 size-4" />
          <Link to="/add-cars">Adicionar carro</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-highlight-500">
          <LogOut className="mr-2 size-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
