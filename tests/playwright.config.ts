import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './playwright-tests',

    fullyParallel: false,

    forbidOnly: !!process.env.CI,

    retries: 0,

    workers: 1,

    use: {
		screenshot: { mode: 'only-on-failure', fullPage: true },
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});