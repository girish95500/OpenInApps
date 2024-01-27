import express from "express";
import app_middlewares from "../../middlewares/app_middlewares.js";

/**
 * @class Server
 * @description Server class which is responsible for starting and stopping the server
 *  and some application level services
 */
class Server {
	app = express();

	/**
	 * @description starts the server on the given port
	 * @param {number} port
	 */
	listenToPort(port) {
		this.server = this.app.listen(port, () => {
			console.log(`Server listening on port ${port}`);
		});
	}

	/**
	 * @description stops the server
	 */
	stop() {
		this.server.close(() => {
			console.log("Server closed");
		});
	}

	/**
	 * @returns {Server} instance of the server
	 * @description This method is used to create and get the instance of the server,
	 * initialize the middlewares.
	 * @example
	 * Server.getInstance();
	 */
	static getInstance() {
		if (!this.instance) {
			this.instance = new Server();
			app_middlewares.forEach((middleware) => {
				this.instance.app.use(middleware);
			});
		}
		return this.instance;
	}
}

export default Server;
