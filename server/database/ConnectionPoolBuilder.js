import ConnectionPool from "./ConnectionPool.js";

/**
 * @description Builder class for ConnectionPool
 * @example
 * const connectionPool = new ConnectionPoolBuilder()
 *    .withDatabase('database')
 *    .withUsername('username')
 *    .withPassword('password')
 *    .withHost('host')
 *    .withDialect('dialect')
 *    .build();
 */
class ConnectionPoolBuilder {
	constructor() {
		this.options = {
			database: null,
			username: null,
			password: null,
			host: null,
			dialect: null,
		};
	}

	withDatabase(database) {
		this.options.database = database;
		return this;
	}

	withUsername(username) {
		this.options.username = username;
		return this;
	}

	withPassword(password) {
		this.options.password = password;
		return this;
	}

	withHost(host) {
		this.options.host = host;
		return this;
	}

	withDialect(dialect) {
		this.options.dialect = dialect;
		return this;
	}

	build() {
		return new ConnectionPool(
			this.options.database,
			this.options.username,
			this.options.password,
			this.options.host,
			this.options.dialect,
		);
	}
}

export default ConnectionPoolBuilder;
