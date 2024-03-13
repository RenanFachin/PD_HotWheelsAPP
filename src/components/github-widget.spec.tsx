import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { GithubWidget } from './github-widget'

describe('GitHub widget', () => {
  it('should display the correct address', () => {
    const wrapper = render(<GithubWidget />, {
      wrapper: ({ children }) => {
        // Primeiro item dentro do array de initialEntries é a rota ativa no momento
        return <MemoryRouter>{children}</MemoryRouter>
      },
    })

    // wrapper.debug()

    expect(
      wrapper.getByText('Visualizar repositório no github').closest('a'),
    ).toHaveAttribute('href', 'https://github.com/RenanFachin')

    expect(
      wrapper.getByText('Visualizar repositório no github'),
    ).toBeInTheDocument()
  })
})
