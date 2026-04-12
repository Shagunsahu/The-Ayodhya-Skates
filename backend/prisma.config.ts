import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  // Tell Prisma where your schema is located
  schema: 'prisma/schema.prisma',
  
  // Use your environment variable from .env
  datasource: {
    url: process.env.DATABASE_URL,
  },
  
  // Configure seed command
  migrations: {
    seed: 'npx tsx prisma/seed.ts',
  },
});