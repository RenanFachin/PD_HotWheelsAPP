import { http, HttpResponse } from 'msw'

interface deleteCarMockParams {
  id: string
}

export const deleteCarMock = http.delete<deleteCarMockParams, never, never>(
  '/cars/:id',
  ({ params }) => {
    // Testando um erro de delete de dados
    if (params.id === 'id-invalid') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
