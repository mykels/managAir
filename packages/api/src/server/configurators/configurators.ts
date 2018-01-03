import { DBConfigurator } from "./db-configurator";
import { GraphQLConfigurator } from "./graphql-configurator";
import { MiddlewareConfigurator } from "./middleware-configurator";
import { RouteConfigurator } from "./route-configurator";
import { IServerConfigurator } from "./server-configurator";

export const configurators: IServerConfigurator[] = [
    new MiddlewareConfigurator(),
    new DBConfigurator(),
    new RouteConfigurator(),
    new GraphQLConfigurator(),
];
