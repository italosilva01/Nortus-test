import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ request }) => {
  // Perform authentication steps. Replace these actions with your own.
  await request.post('http://localhost:3001/api/login', {
    form: {
      username: 'Valeria.gonzalez+7476@eightroom.com',
      password: 'User7476.',
    },
  });

  await request.storageState({ path: authFile });
});
