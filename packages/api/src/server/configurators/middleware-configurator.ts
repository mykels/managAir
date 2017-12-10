import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import { Express } from 'express';
import * as morgan from 'morgan';
import { LOG_LEVEL } from "../../core/config/config";

export class MiddlewareConfigurator {
    static configure(app: Express) {
        app.use(morgan(LOG_LEVEL));
        app.use(cors());
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        app.use(compression());
    };
}
