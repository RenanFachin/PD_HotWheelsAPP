import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NotFound } from '@/pages/404'

describe('Not Found', () => {
  it('should render notFound', () => {
    const wrapper = render(<NotFound />, {
      wrapper: ({ children }) => {
        // Primeiro item dentro do array de initialEntries é a rota ativa no momento
        return <MemoryRouter>{children}</MemoryRouter>
      },
    })

    // wrapper.debug()

    expect(wrapper.getByText('Página não encontrada')).toBeInTheDocument()
  })
})
