import { expect, test } from '@playwright/test'

test('delete especific car', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/cars', {
    waitUntil: 'networkidle',
  })

  await page
    .locator('div')
    .filter({ hasText: /^uno2000Marca:fiatCor:vermelhoVisualizarDeletar$/ })
    .getByTestId('variantButtonTest')
    .click()

  await page.getByRole('button', { name: 'Deletar' }).click()

  // Expect
  const toast = page.getByText('Carro apagado com sucesso!')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})
