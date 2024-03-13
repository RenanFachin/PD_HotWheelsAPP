import { expect, test } from '@playwright/test'

test('register car successfully', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  // Ações na página
  // Selecionando os inputs e preenchendo
  await page.getByLabel('Nome').fill('Renegade')
  await page.getByLabel('Marca').fill('JEEP')
  await page.getByLabel('Cor').fill('Prata')
  await page.getByLabel('Ano').fill('2018')

  // Realizando o submit
  await page.getByRole('button', { name: 'Adicionar', exact: true }).click()

  // Expect
  const toast = page.getByText('Carro adicionar com sucesso!')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('register car without car name', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  // Ações na página
  // Selecionando os inputs e preenchendoawait page.getByLabel('Marca').fill('JEEP')

  await page.getByLabel('Cor').fill('Prata')
  await page.getByLabel('Ano').fill('2018')

  // Realizando o submit
  await page.getByRole('button', { name: 'Adicionar', exact: true }).click()

  // Expect
  const errorMessage = page.getByText('O nome do carro é obrigatório')
  expect(errorMessage).toBeVisible()

  await page.waitForTimeout(1000)
})

test('register car without car brand', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  // Ações na página
  // Selecionando os inputs e preenchendo
  await page.getByLabel('Nome').fill('Renegade')
  await page.getByLabel('Cor').fill('Prata')
  await page.getByLabel('Ano').fill('2018')

  // Realizando o submit
  await page.getByRole('button', { name: 'Adicionar', exact: true }).click()

  // Expect
  const errorMessage = page.getByText('A marca do carro é obrigatório')
  expect(errorMessage).toBeVisible()

  await page.waitForTimeout(1000)
})

test('register car without car color', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  // Ações na página
  // Selecionando os inputs e preenchendo
  await page.getByLabel('Nome').fill('Renegade')
  await page.getByLabel('Marca').fill('JEEP')
  await page.getByLabel('Ano').fill('2018')

  // Realizando o submit
  await page.getByRole('button', { name: 'Adicionar', exact: true }).click()

  // Expect
  const errorMessage = page.getByText('A cor do carro é obrigatório')
  expect(errorMessage).toBeVisible()

  await page.waitForTimeout(1000)
})

test('register car without car year', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  // Ações na página
  // Selecionando os inputs e preenchendo
  await page.getByLabel('Nome').fill('Renegade')
  await page.getByLabel('Marca').fill('JEEP')
  await page.getByLabel('Cor').fill('Prata')

  // Realizando o submit
  await page.getByRole('button', { name: 'Adicionar', exact: true }).click()

  // Expect
  const errorMessage = page.getByText('O ano do carro é obrigatório')
  expect(errorMessage).toBeVisible()

  await page.waitForTimeout(1000)
})

test('navigate to car page', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('link', { name: 'Carros' }).click()

  expect(page.url()).toContain('/cars')
})

test('create car using add-ca-widget', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Adicionar carro' }).click()

  await page.waitForTimeout(1000)

  await page.getByLabel('Adicionar carro').locator('#carName').fill('Renegade')
  await page.getByLabel('Adicionar carro').locator('#carBrand').fill('JEEP')
  await page.getByLabel('Adicionar carro').locator('#carColor').fill('Prata')
  await page.getByLabel('Adicionar carro').locator('#carYear').fill('2018')

  await page.waitForTimeout(1000)

  // Realizando o submit
  await page.getByRole('button', { name: 'Adicionar' }).click()

  // Expect
  const toast = page.getByText('Carro adicionar com sucesso!')
  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('reset all input values', async ({ page }) => {
  // Navegando até a pagina de adicionar carro e aguardando o loading
  await page.goto('/add-cars', {
    waitUntil: 'networkidle',
  })

  // Ações na página
  // Selecionando os inputs e preenchendo
  await page.getByLabel('Nome').fill('Renegade')
  await page.getByLabel('Marca').fill('JEEP')
  await page.getByLabel('Cor').fill('Prata')
  await page.getByLabel('Ano').fill('2018')

  // Realizando o submit
  await page.getByRole('button', { name: 'Resetar' }).click()

  // Expect
  const inputNameValue = page.getByLabel('Nome')
  const inputBrandValue = page.getByLabel('Nome')
  const inputColorValue = page.getByLabel('Nome')
  const inputYearValue = page.getByLabel('Nome')

  expect(inputNameValue).toHaveValue('')
  expect(inputBrandValue).toHaveValue('')
  expect(inputColorValue).toHaveValue('')
  expect(inputYearValue).toHaveValue('')

  await page.waitForTimeout(2000)
})
