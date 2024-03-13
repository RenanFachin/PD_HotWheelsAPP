import { http, HttpResponse } from 'msw'

import { Car } from '@/contexts/carsContext'

export const RegisterCarMock = http.post<never, Car>(
  '/cars',
  async ({ request }) => {
    const { name, brand, color, year } = await request.json()

    if (name !== '' && brand !== '' && color !== '' && year !== '') {
      return new HttpResponse(null, {
        status: 200,
      })
    }
    return new HttpResponse(null, { status: 401 })
  },
)
