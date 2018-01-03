import { Express } from 'express';
import { IServerConfigurator } from "./server-configurator";

export class RouteConfigurator implements IServerConfigurator {
    configure(app: Express) {
        app.get('/', function (req, res) {
            res.send('hello world')
        });
    };
}
