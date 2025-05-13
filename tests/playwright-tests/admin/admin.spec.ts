import { test, expect } from '@playwright/test';

const QLOAPPS_ADMIN_URL = process.env.ADMIN_BASE_URL || 'http://127.0.0.1/QloApps/adminhtl';

test('AdminLogin Page', async ({ page }) => {
    await page.goto(QLOAPPS_ADMIN_URL);
  
    await expect(page).toHaveTitle(/Administration panel/);
  
    // Verify that it is an Authentication Page
    await expect(page.getByRole('heading', { name: 'QloApps' })).toBeVisible();
});

test('fill admin login form and submit', async ({ page }) => {
  await page.goto(QLOAPPS_ADMIN_URL);

  // Fill email
  await page.fill('#email', 'admin@example.com');

  // Fill password
  await page.fill('#passwd', 'admin1234');

  // Optionally check "Stay logged in"
  await page.check('#stay_logged_in');

  // Click the login button
  await page.click('button[name="submitLogin"]');

  // Optional: Verify navigation to the dashboard or any successful login indicator
  await expect(page).toHaveURL(/.*AdminDashboard.*/);
});