async function getAISelector(
  page: Page,
  dom: string,
  role: Parameters<Page['getByRole']>[0],
  intent: string,
  txt: string = /[\s\S]*/
): Promise<string> {

    if (new RegExp(txt, 'i').test(intent))
        return page.getByRole(role, { name: intent });

  throw new Error(`No AI selector found for intent: ${intent}`);
}

export async function aiLocator(
  page: Page,
  role: Parameters<Page['getByRole']>[0],
  intent: string
) {
  const locator = page.getByRole(role, { name: intent });

  try {
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    return locator;
  } catch (e) {
    const dom = await page.content();
    const aiSelector = await getAISelector(page, dom, role, intent);
    console.warn(
      `-> AI locator suggestion
      URL: ${page.url()}
      Intent: ${intent}
      Suggested selector: ${aiSelector}`
    );
    throw e;
  }
}