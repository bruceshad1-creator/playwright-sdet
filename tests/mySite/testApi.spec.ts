import { test, expect } from '@playwright/test';
import { getEndpoint } from '../../src/shared/utils/apiServices/api';

test('@api Test 1: Verify 401 status for BrowserStack GET endpoint', async ({ request }) => {
  const endpoint = 'https://api-observability.browserstack.com/api/v1/init';
  const status = 401;
  const statusText = 'Unauthorized';
  const body = await getEndpoint(
    request,
    endpoint,
    status,
    statusText,
  );

  expect(body).toBeDefined();
  expect(body.showAuth).toBe('true');
  expect(body.message).toBe('Unauthorized Access!');
});