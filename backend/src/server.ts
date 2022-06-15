import dotenv from "dotenv";
import express from "express";
import path from "path";
import config from "./config/config";
import connect_db from "./config/db";

dotenv.config({ path: path.join(__dirname, "../.env") });
config(process.env.NODE_ENV || "development");

const main = async () => {
	await connect_db();

	const app = express();

	app.get("/", (_, res) => {
		res.status(200)
			.send({
			status: "connected successfully"
		})
	})

	app.listen(process.env.PORT || 5000, () => {
		console.log(`Server listening in ${process.env.NODE_ENV} on ${process.env.PORT}`)
	})
}

main();