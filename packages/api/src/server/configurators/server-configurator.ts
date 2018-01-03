import { Express } from 'express';

export interface IServerConfigurator {
    configure(app: Express);
}
