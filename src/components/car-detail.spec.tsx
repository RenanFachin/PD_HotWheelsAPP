import { render } from '@testing-library/react'

import { CarDetail } from './car-detail'

const car = {
  id: 1,
  name: 'Mustang',
  brand: 'Ford',
  color: 'Preto',
  year: '1970',
}
describe('CarDetail', () => {
  it('should render car detail', () => {
    const wrapper = render(<CarDetail car={car} />)

    // wrapper.debug()

    expect(wrapper.getByText('Mustang')).toBeInTheDocument()
    expect(wrapper.getByText('1970')).toBeInTheDocument()
    expect(wrapper.getByText('Preto')).toBeInTheDocument()
    expect(wrapper.getByText('Ford')).toBeInTheDocument()
  })
})
