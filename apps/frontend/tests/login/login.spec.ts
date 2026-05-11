import { expect, test } from '@playwright/test';

test.describe('Login', () => {
  test.describe('when the user is not logged in', () => {
    test('Try access the dashboard', async ({ page }) => {
      await page.goto('http://localhost:3000/dashboard');
      await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
      await expect(page.url()).toContain('/login');
    });
  });

  test.describe('when the user is logged in', () => {
    test.beforeAll(async ({ request }) => {
      // aqui irei fazer o login do usuário usando o setup de autenticação
    });
    test('Try access the dashboard', async ({ page }) => {});
  });
});
