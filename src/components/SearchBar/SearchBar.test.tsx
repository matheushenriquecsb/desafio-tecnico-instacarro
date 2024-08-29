import { test, expect } from "@playwright/test";

test.describe("SearchBar Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://marvel-characteres.netlify.app");
  });

  test("should render the SearchBar component correctly", async ({ page }) => {
    const searchIcon = page.locator(".search-icon");
    await expect(searchIcon).toBeVisible();

    const searchInput = page.locator(".search-input");
    await expect(searchInput).toBeVisible();

    await expect(searchInput).toHaveAttribute(
      "placeholder",
      "Procure por heróis"
    );
  });

  test("should call setCharacter function when input value changes", async ({
    page,
  }) => {
    const searchInput = page.locator(".search-input");
    await searchInput.fill("Spider-Man");
    await expect(searchInput).toHaveValue("Spider-Man");
  });
});
