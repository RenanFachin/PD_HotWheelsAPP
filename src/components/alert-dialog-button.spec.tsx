import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AlertDialogButton } from './alert-dialog-button'

const car = {
  id: 1,
  name: 'Mustang',
  brand: 'Ford',
  color: 'Preto',
  year: '1970',
}

// conceito de spi -> Funções que simulam alguma coisa
const onClickButtonCallback = vi.fn()
describe('Delete car dialog button', () => {
  it('should be possible to perform a function on click, simulating an open dialog modal on screen ', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <AlertDialogButton car={car} onClick={onClickButtonCallback} />,
    )

    // wrapper.debug()
    const deleteCarButton = wrapper.getByRole('button', {
      name: 'Deletar',
    })

    await user.click(deleteCarButton)

    // Verificando que a função de spi foi realmente chamada
    expect(onClickButtonCallback).toHaveBeenCalled()
  })
})
