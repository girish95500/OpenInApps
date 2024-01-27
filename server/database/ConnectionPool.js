import { Sequelize } from "sequelize";
import chalk from "chalk";

/**
 * @class ConnectionPool
 * @description This class is used to create a connection pool to the database
 */
class ConnectionPool {
	/**
	 * @constructor
	 * @param {string} database - database name
	 * @param {string} username - username
	 * @param {string} password - password
	 * @param {string} host - host
	 * @param {string} dialect - dialect
	 * @description This constructor is used to create a connection pool to the database
	 */
	constructor(database, username, password, host, dialect) {
		this.database = database;
		this.username = username;
		this.password = password;
		this.host = host;
		this.dialect = dialect;
		this.connection = new Sequelize(this.database, this.username, this.password, {
			host: this.host,
			dialect: this.dialect,
			pool: {
				max: 5,
				min: 0,
				acquire: 60000,
				idle: 10000,
			},
			logging: process.env.NODE_ENV === "development" ? console.log : false,
		});
		this.syncDb = false;
	}

	/**
	 * @method authenticateAndSyncTables
	 * @description connects to the database and authenticates the connection pool
	 * , syncs all the tables in the database
	 * @example
	 * connectionPoolObject.authenticateAndSyncTables();
	 */
	authenticateAndSyncTables = async () => {
		try {
			await this.connection.authenticate();
			await this.syncTables();
			console.log(chalk.green("Connection has been established successfully."));
		} catch (error) {
			console.log(chalk.red("Unable to connect to the database:"));
			throw error;
		}
	};

	/**
	 * @method syncTables
	 * @description sync all tables in the database
	 * @example
	 * connectionPoolObject.syncTables();
	 */
	syncTables = async () => {
		try {
			let forceUpdateDb = process.argv.includes("--forceUpdateDb");
			let alterDb = process.argv.includes("--alterDb");
			if (forceUpdateDb) {
				console.log(chalk.yellowBright("Force updating database..."));
				await this.connection.sync({
					force: true,
				});
			} else if (alterDb) {
				console.log(chalk.yellowBright("Altering database..."));
				await this.connection.sync({
					alter: true,
				});
			} else {
				await this.connection.sync({
					force: true,
					alter: false,
				});
			}
			console.log(chalk.green("All models were synchronized successfully."));
			this.syncDb = true;
		} catch (error) {
			console.log(chalk.red("Unable to sync the database:"));
			throw error;
		}
	};

	/**
	 * @method closeConnection
	 * @description close the connection pool to the database
	 * @example
	 * ConnectionPool.closeConnection();
	 */
	closeConnection = async () => {
		if (this.connection !== null) {
			await this.connection.close();
		}
	};
}

export default ConnectionPool;