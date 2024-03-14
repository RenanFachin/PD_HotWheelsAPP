import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Plus } from 'lucide-react'

import { Button } from './button'

const onClickButtonCallback = vi.fn()
describe('Button Variants', () => {
  it('should display right button variant layout (primaryapp)', () => {
    const wrapper = render(
      <Button variant="primaryapp">
        <Button.Icon>
          <Plus className="size-4" />
        </Button.Icon>
        <Button.Text>GitHub</Button.Text>
      </Button>,
    )

    // wrapper.debug()
    const rightVariant = wrapper.getByTestId('variantButtonTest')
    // console.log(rightVariant.outerHTML)

    expect(wrapper.getByText('GitHub')).toBeInTheDocument()
    expect(rightVariant).toHaveClass('text-primaryapp-500')
  })

  it('should display right button variant layout (secondary)', () => {
    const wrapper = render(
      <Button variant="secondary">
        <Button.Text>Adicionar</Button.Text>
      </Button>,
    )

    // wrapper.debug()
    const rightVariant = wrapper.getByTestId('variantButtonTest')
    // console.log(rightVariant.outerHTML)

    expect(wrapper.getByText('Adicionar')).toBeInTheDocument()
    expect(rightVariant).toHaveClass('bg-highlight-500/80 text-white')
  })

  it('should be possible to perform a function on click', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Button variant="secondary" onClick={onClickButtonCallback}>
        <Button.Text>Adicionar</Button.Text>
      </Button>,
    )

    const addCarButton = wrapper.getByRole('button', {
      name: 'Adicionar',
    })

    await user.click(addCarButton)

    expect(onClickButtonCallback).toHaveBeenCalled()
  })
})
