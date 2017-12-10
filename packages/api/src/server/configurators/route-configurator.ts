import { Express } from 'express';

export class RouteConfigurator {
    static configure(app: Express) {
        app.get('/', function (req, res) {
            res.send('hello world')
        });
    };
}
