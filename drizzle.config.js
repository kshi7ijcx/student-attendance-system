import {defineConfig} from 'drizzle-kit';

export default defineConfig({
    schema: './lib/schema.js',
    out: './lib/migrations',
    dialect: 'postgresql',
    verbose: true,
    strict: true
})