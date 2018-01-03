import { Express } from 'express';
import schema from "../../graphql/schema/schema";
import { IServerConfigurator } from "./server-configurator";

const expressGraphQL = require('express-graphql');

export class GraphQLConfigurator implements IServerConfigurator {
    configure(app: Express) {
        app.use('/graphql', expressGraphQL({
            graphiql: true,
            schema
        }));
    };
}
