import { MikroORM } from "@mikro-orm/core";
import type { PostgreSqlDriver } from '@mikro-orm/postgresql';
import path from "path";

const connect_db = async () => {
  try {
    const orm = await MikroORM.init<PostgreSqlDriver>({
      migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
      },
      type: "postgresql",
      port: 5432,
      host: process.env.POSTGRES_HOST!,
      user: process.env.POSTGRES_USER!,
      password: process.env.POSTGRES_PASSWORD!,
      dbName: process.env.POSTGRES_DB!,
      debug: process.env.NODE_ENV === "development",
      entities: ['./dist/entities/**/*.js'], // path to our JS entities (dist), relative to `baseDir`
      entitiesTs: ['./src/entities/**/*.ts'], // path to our TS entities (source), relative to `baseDir`
    });
    await orm.getMigrator().up();
    console.log(`Connected to database ${process.env.POSTGRES_HOST}:${process.env.POSTGRES_DB}`);
  }
  catch (error) {
    console.log(`Could not connect to database ${process.env.POSTGRES_HOST}:${process.env.POSTGRES_DB}`, error)
  }
};

export default connect_db;
