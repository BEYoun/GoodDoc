import accessEnv from "#root/helpers/accessEnv";
import { Connection, createConnection } from "typeorm";

import Cabinet from "./entities/Cabinet";

let connection: Connection;

export const initConnection = async () => {
  connection = await createConnection({
    entities: [Cabinet],
    type: "mysql",
    url: accessEnv("CABINETS_SERVICE_DB_URL"),
  });
};

const getConnection = () => connection;

export default getConnection;
