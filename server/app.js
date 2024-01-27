import Server from "./services/app_services/Server.js";
import getEnvironmentConfigs from "./config/config.js";
import ConnectionPoolBuilder from "./database/ConnectionPoolBuilder.js";
import ModelsLoader from "./database/loaders/ModelsLoader.js";

const PORT = getEnvironmentConfigs().PORT;

const app = Server.getInstance();

const dbConfigs = getEnvironmentConfigs().dbConfigs;

let connectionPool = new ConnectionPoolBuilder()
    .withDatabase(dbConfigs.database)
    .withUsername(dbConfigs.username)
    .withPassword(dbConfigs.password)
    .withHost(dbConfigs.host)
    .withDialect(dbConfigs.dialect)
    .build();

export let models = new ModelsLoader(connectionPool.connection).models;

connectionPool.authenticateAndSyncTables();

app.listenToPort(PORT);