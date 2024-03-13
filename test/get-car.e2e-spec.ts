import { expect, test } from '@playwright/test'

test('list cars', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/cars', {
    waitUntil: 'networkidle',
  })

  // Verificando se existe o registro dos 3 carros
  expect(page.getByRole('heading', { name: 'uno' })).toBeVisible()
  expect(page.getByRole('heading', { name: 'HB20' })).toBeVisible()
  expect(page.getByRole('heading', { name: 'Creta' })).toBeVisible()
})
