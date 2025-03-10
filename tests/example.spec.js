const { test, expect } = require("@playwright/test");
const { email, pass } = require("../user");

test("authorization with an invalid password", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.click("text=Войти");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', "123456");
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator('[data-testid="login-error-hint"]')).toContainText("Вы ввели неправильно логин или пароль");
});

test("Successful authorization", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.click("text=Войти");
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', email);
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', pass);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.url()).toContain('/profile/9166982');
});