import { render } from '@testing-library/react'

import { Task } from './task'

describe('Task', () => {
  it('should render task', () => {
    const wrapper = render(
      <>
        <Task>
          Implementar sistema de front-end para uma coleção de carrinhos
          HotWheels
        </Task>

        <Task>Na fase 1 o projeto deve ser estático</Task>
        <Task>Criar um projeto React</Task>
      </>,
    )

    // wrapper.debug()

    expect(
      wrapper.getByText(
        'Implementar sistema de front-end para uma coleção de carrinhos HotWheels',
      ),
    ).toBeInTheDocument()
    expect(
      wrapper.getByText('Na fase 1 o projeto deve ser estático'),
    ).toBeInTheDocument()
    expect(wrapper.getByText('Criar um projeto React')).toBeInTheDocument()
  })
})
