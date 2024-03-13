import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AddCarWidget } from './add-car-widget'

// conceito de spi -> Funções que simulam alguma coisa
const onClickButtonCallback = vi.fn()
describe('Add car widget', () => {
  it('should display form on user click', async () => {
    const user = userEvent.setup()

    const wrapper = render(<AddCarWidget onClick={onClickButtonCallback} />)

    // wrapper.debug()
    const addCarButton = wrapper.getByRole('button', {
      name: 'Adicionar carro',
    })

    await user.click(addCarButton)

    // Verificando que a função de spi foi realmente chamada
    expect(onClickButtonCallback).toHaveBeenCalled()
  })
})
