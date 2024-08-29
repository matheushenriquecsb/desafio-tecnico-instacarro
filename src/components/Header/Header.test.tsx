import { test, expect } from "@playwright/test";

test("Header Component", async ({ page }) => {
  await page.goto("https://marvel-characteres.netlify.app");

  const title = await page.locator(".title").textContent();
  expect(title).toBe("EXPLORE O UNIVERSO E CRIE SUA EQUIPE");

  const description = await page.locator(".description").textContent();
  expect(description).toBe(
    "Os melhores personagens já feitos em quadrinhos. Fique viciado em uma generosa porção de heróis e vilões!"
  );
});
