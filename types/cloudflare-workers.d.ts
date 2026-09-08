declare module "cloudflare:workers" {
  export const env: {
    DB?: Parameters<typeof import("drizzle-orm/d1").drizzle>[0];
  };
}

interface Fetcher {
  fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;
}

type D1Database = object;
