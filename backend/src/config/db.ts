import { MikroORM } from "@mikro-orm/core";
import microConfig from "./micro-orm.config";

const connect_db = async () => {
  const orm = await MikroORM.init(microConfig);
};

export default connect_db;
