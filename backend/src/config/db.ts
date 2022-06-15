import { MikroORM } from "@mikro-orm/core";
import microConfig from "./micro-orm.config";

const connect_db = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
};

export default connect_db;
