import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema: './lib/schema.js',
    out: './lib/migrations',
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DBURL,
    },
    verbose: true,
    strict: true
})