import { MikroORM } from "@mikro-orm/core";

export default {
  type: "postgresql",
  port: 5432,
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  dbName: process.env.DB_NAME!,
  debug: process.env.NODE_ENV === "development",
  entities: [__dirname + "../entities/*.ts"],
} as Parameters<typeof MikroORM.init>[0];
