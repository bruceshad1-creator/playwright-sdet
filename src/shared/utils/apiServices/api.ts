import { APIRequestContext, expect } from '@playwright/test';

export async function getEndpoint(
  request: APIRequestContext,
  endpoint: string,
  status: number = 200,
  statusText: string,
): Promise<any> {

  const response = await request.get(endpoint);
  console.log(`--> API responded with status: ${response.status()} - ${response.statusText()}`);

  expect(response.status()).toBe(status);
  expect(response.statusText()).toBe(statusText);
//   if (!response.ok()) {
//     throw new Error(
//       `API call failed: ${response.status()} - ${response.statusText()}`
//     );
//   }

  return await response.json();
}