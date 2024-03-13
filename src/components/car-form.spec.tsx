import { render } from '@testing-library/react'

import { CarForm } from './car-form'

describe('CarForm', () => {
  it('should render form fields and buttons', () => {
    const wrapper = render(<CarForm />)

    // wrapper.debug()

    // Verificando se os inputs estão presentes na tela
    expect(wrapper.getByLabelText('Nome')).toBeInTheDocument()
    expect(wrapper.getByLabelText('Marca')).toBeInTheDocument()
    expect(wrapper.getByLabelText('Cor')).toBeInTheDocument()
    expect(wrapper.getByLabelText('Ano')).toBeInTheDocument()

    // Verificar se os botões existem
    expect(wrapper.getByText('Adicionar')).toBeInTheDocument()
    expect(wrapper.getByText('Resetar')).toBeInTheDocument()
  })
})
