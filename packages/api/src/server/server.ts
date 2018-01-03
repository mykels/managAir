import * as express from 'express';
import { Express } from 'express';
import { createServer } from "http";
import { PORT } from "../core/config/config";
import logger from "../core/logs/logger";
import { configurators } from "./configurators/configurators";

export class Server {
    static app: Express = express();
    static server: any;

    static init() {
        Server.initServer();
        Server.configure();
        Server.listen();
    }

    static initServer() {
        Server.app = express();
        Server.server = createServer(Server.app);
    }

    static configure() {
        configurators.forEach(configurator => configurator.configure(Server.app));
    }

    static listen() {
        return Server.server.listen(+PORT, () => {
            logger.info(`Server is now running on localhost:3000`);
        });
    }
}
