import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-cars">Adicionar</NavLink>
      </>,
      {
        // Como este componente precisa do react-router-dom para ter acesso ao pathname e para isto é necessário estar dentro do provider.
        wrapper: ({ children }) => {
          // Primeiro item dentro do array de initialEntries é a rota ativa no momento
          return (
            <MemoryRouter initialEntries={['/add-cars']}>
              {children}
            </MemoryRouter>
          )
        },
      },
    )

    // wrapper.debug()

    expect(wrapper.getByText('Home').dataset.active).toEqual('false')
    expect(wrapper.getByText('Adicionar').dataset.active).toEqual('true')
  })
})
