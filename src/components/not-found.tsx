import { Link } from 'react-router-dom'

export function NotFoundComponent() {
  return (
    <div className="bg-primaryapp-100 flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold">Página não encontrada</h1>
      <p className="text-primaryapp-400">
        Voltar para{' '}
        <Link to="/" className="text-highlight-300 hover:text-highlight-500 ">
          Home
        </Link>
      </p>
    </div>
  )
}
