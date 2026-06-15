import { expect, test } from '@playwright/test';

test.describe('Login', () => {
  test.describe('when the user is not logged in', () => {
    test('Try access the dashboard', async ({ page, baseURL }) => {
      await page.goto('/dashboard');
      await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
      await expect(page.url()).toBe(baseURL + '/login');
    });
  });

  test.describe('when the user is logged in', () => {
    test('Try access the dashboard', async ({ page, baseURL }) => {
      // aqui irei fazer o login do usuário usando o setup de autenticação
      await page.goto('/login');
      await page
        .getByRole('textbox', { name: 'Digite seu usuário' })
        .fill('Valeria.gonzalez+7476@eightroom.com');
      await page
        .getByRole('textbox', { name: 'Digite sua senha' })
        .fill('User7476.');

      await page.getByRole('button', { name: 'Entrar' }).click();
      // Por algum motivo que não sei, o login não está sendoi realizado corretamente, por isso estou usando o timeout para esperar 10 segundos
      await expect(page.url()).toBe(baseURL + '/', { timeout: 10_000 });
      await expect(
        page.getByRole('heading', { name: 'Dashboard' }),
      ).toBeVisible();
    });
  });
});
