import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { deleteCarMock } from './delete-car-mock'
import { getCarsRegisteredMock } from './get-cars-registered-mock'
import { RegisterCarMock } from './register-car-mock'

export const worker = setupWorker(
  RegisterCarMock,
  getCarsRegisteredMock,
  deleteCarMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
