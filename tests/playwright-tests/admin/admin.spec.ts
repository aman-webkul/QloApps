import { test, expect } from '@playwright/test';

const QLOAPPS_ADMIN_URL = process.env.ADMIN_BASE_URL || 'http://127.0.0.1/QloApps/adminhtl';

test('AdminLogin Page', async ({ page }) => {
    console.log(QLOAPPS_ADMIN_URL);
    await page.goto(QLOAPPS_ADMIN_URL);
  
    await expect(page).toHaveTitle(/Administration panel/);
  
    // Verify that it is an Authentication Page
    await expect(page.getByRole('heading', { name: 'QloApps' })).toBeVisible();
  });
  