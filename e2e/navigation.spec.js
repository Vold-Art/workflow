import { test, expect } from "@playwright/test";

/* Test that navigation from home to venue details works */

test("Navigation: user can open a venue and see its details", async ({
  page,
}) => {
  /* Go to home page */

  await page.goto(process.env.BASE_URL);

  /* Wait for the venue list to load */

  await page.waitForSelector("#venue-container a", { timeout: 10000 });

  /* Click the first venue card link */

  await page.locator("#venue-container a").first().click();

  /* Wait for the venue details content to load */

  await page.waitForFunction(
    () => {
      const heading = document.querySelector("h1, h2");
      return (
        heading &&
        heading.textContent &&
        !/loading venue/i.test(heading.textContent)
      );
    },
    { timeout: 10000 },
  );

  /* Check that a heading contains the text “Venue details” */

  const heading = await page.textContent("h1, h2");
  expect(heading.toLowerCase()).toContain("venue details");
});
