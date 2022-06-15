import dotenv from "dotenv";
import path from "path";
import config from "./config/config";

dotenv.config({ path: path.join(__dirname, "config", "config.env") });
config(process.env.NODE_ENV || "development");

