import { test, expect } from "@playwright/test";

test.describe("Favorites Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://marvel-characteres.netlify.app");
  });

  test("should render the FavoritesFilter component correctly", async ({
    page,
  }) => {
    const heroesFoundText = page.locator(".heroes-found");
    await expect(heroesFoundText).toBeVisible();
    await expect(heroesFoundText).toHaveText(/Encontrados \d+ heróis/);

    const favoritesButton = page.locator(".favorites-button");
    await expect(favoritesButton).toBeVisible();

    const favoriteIcon = page.locator(".favorite-icon");
    await expect(favoriteIcon).toBeVisible();

    await expect(favoritesButton).toHaveText("Somente favoritos");
  });
});
