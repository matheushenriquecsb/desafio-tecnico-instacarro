import { test, expect } from "@playwright/test";

test.describe("CharacterCardList Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://marvel-characteres.netlify.app");
  });

  test("should render the list of CharacterCard components correctly", async ({
    page,
  }) => {
    const characterCard = page.locator(".character-card").first();
    await expect(characterCard).toBeVisible();

    const favoriteButton = characterCard.locator(".favorite-button").first();
    await expect(favoriteButton).toBeVisible();
  });

  test("should toggle favorite status when favorite button is clicked", async ({
    page,
  }) => {
    const favoriteButton = page.locator(".favorite-button").first();
    await favoriteButton.click();

    const updatedFavoriteButton = page.locator(".favorite-button").first();
    await expect(updatedFavoriteButton).toHaveClass(/favorite/);
  });
});
