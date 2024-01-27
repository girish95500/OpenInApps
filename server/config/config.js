const common_configs = {
    SECRET_KEY:"Secret_Key"
}

const dev_configs = {
    ...common_configs,
    PORT : 8000,
    dbConfigs: {
        database: "openinapps",
        username: "postgres",
        password: "openinapps",
        host: "localhost",
        dialect: "postgres",
    },
};

const prod_configs = {
    common_configs,
    PORT : 8080,
    dbConfigs: {
        database: "openinapps",
        username: "postgres",
        password: "openinapps",
        host: "localhost",
        dialect: "postgres",
    },
}

const configs = {
    "production": prod_configs,
    "development": dev_configs
}

const getEnvironmentConfigs = () => {
    const env = process.env.NODE_ENV || "development";
    return configs[env];
}

export default getEnvironmentConfigs;