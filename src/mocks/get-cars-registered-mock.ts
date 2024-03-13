import { http, HttpResponse } from 'msw'

export const getCarsRegisteredMock = http.get('/cars', () => {
  return HttpResponse.json([
    {
      id: 1708468780593,
      name: 'uno',
      year: '2000',
      brand: 'fiat',
      color: 'vermelho',
    },
    {
      id: 1708468780594,
      name: 'HB20',
      year: '2020',
      brand: 'Hyundai',
      color: 'Prata',
    },
    {
      id: 1708468780595,
      name: 'Creta',
      year: '2021',
      brand: 'Hyundai',
      color: 'Branco',
    },
  ])
})
