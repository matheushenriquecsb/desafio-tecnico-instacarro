import { test, expect } from "@playwright/test";

test.describe("CharacterCard Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://marvel-characteres.netlify.app");
  });

  test("should render the CharacterCard component correctly", async ({
    page,
  }) => {
    const characterImage = page.locator(".character-image").first();
    await expect(characterImage).toBeVisible();

    const favoriteButton = page.locator(".favorite-button").first();
    await expect(favoriteButton).toBeVisible();
  });

  test("should navigate to character details page when image is clicked", async ({
    page,
  }) => {
    const characterImage = page.locator(".character-image").first();
    await characterImage.click();
    await expect(page).toHaveURL(/.*\/\d+/);
  });
});
