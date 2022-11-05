import dataBaseConnection from "./database/index.js";
import serverStart from "./server/index.js";

await dataBaseConnection();
serverStart();
