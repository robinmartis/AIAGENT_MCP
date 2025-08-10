import { test, expect } from '@playwright/test';

// Test to sign in, select iPhone X, add to cart, checkout, and confirm product in cart

test('Sign in and purchase iPhone X', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill in login credentials
  await page.fill('#username', 'rahulshettyacademy');
  await page.fill('#password', 'learning');
  await page.click('#signInBtn');

  // Wait for navigation after login
  await page.waitForNavigation();

  // Select iPhone X product and add to cart
  const iphoneCard = page.locator('.card:has-text("iphone X")');
  await iphoneCard.locator('button.btn.btn-info').click();

  // Click on Checkout (Cart)
  await page.click('a.nav-link.btn.btn-primary');

  // Confirm product is in cart
  const productName = await page.locator('h4.media-heading').textContent();
  expect(productName).toContain('iphone X');

  // Proceed to checkout
  await page.click('button.btn.btn-success');

  // Confirm checkout page is visible
  await expect(page.locator('h2')).toHaveText(/Thank you/);
});
