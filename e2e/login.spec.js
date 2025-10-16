import { test, expect } from "@playwright/test";

/* Test login with valid credentials */
test("User can successfully log in with valid credentials", async ({
  page,
}) => {
  /* Go to login page folder */
  await page.goto(`${process.env.BASE_URL}login/`);

  /* Wait for form to be ready */
  await page.waitForSelector("#loginForm", { timeout: 10000 });

  /* Fill and submit */
  await page.fill('input[name="email"]', process.env.LOGIN_EMAIL);
  await page.fill('input[name="password"]', process.env.LOGIN_PASSWORD);
  await page.click('#loginForm button[type="submit"]');

  /* Wait for navigation */
  await page.waitForLoadState("networkidle");

  /* Check token saved */
  const token = await page.evaluate(() => localStorage.getItem("token"));
  expect(token).toBeTruthy();
});

/* Test login with invalid credentials */
test("User sees an error message with invalid credentials", async ({
  page,
}) => {
  /* Go to login page */
  await page.goto(`${process.env.BASE_URL}login/`);

  /* Wait for form to be ready */
  await page.waitForSelector("#loginForm", { timeout: 10000 });

  /* Fill with bad creds and submit */
  await page.fill('input[name="email"]', "fakeuser@stud.noroff.no");
  await page.fill('input[name="password"]', "WrongPassword123");
  await page.click('#loginForm button[type="submit"]');

  /* Wait for error container to show something */
  const error = page.locator("#message-container");
  await expect(error).toBeVisible({ timeout: 10000 });

  /* Expect it to include an error */
  const text = (await error.textContent())?.toLowerCase() ?? "";
  expect(text).toMatch(/invalid|error|failed/);
});
