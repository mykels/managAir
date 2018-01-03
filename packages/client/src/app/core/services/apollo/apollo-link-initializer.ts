import { Injectable } from "@angular/core";
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from "apollo-link-http";

@Injectable()
export class ApolloLinkInitializer {
    constructor() {
    }

    init(): ApolloLink {
        let transportLink = this.initTransportLink();
        let loggerLink = this.initLoggerLink();
        let errorLink = this.initErrorLink();
        let links = [loggerLink, errorLink, transportLink];

        return ApolloLink.from(links);
    }

    private initTransportLink() {
        // TODO: get from env
        return new HttpLink({uri: 'http://localhost:3000/graphql'});
    }

    private initLoggerLink() {
        return new ApolloLink((operation, forward) => {
            console.log(`[GraphQL] request details: ${operation.operationName} 
                        ${JSON.stringify(operation.query)} ${JSON.stringify(operation.variables)}`);
            console.time(`[GraphQL] response ${operation.operationName}`);

            return forward(operation).map(result => {
                console.timeEnd(`[GraphQL] response ${operation.operationName}`);
                return result;
            });
        });
    }

    private initErrorLink() {
        return onError(({graphQLErrors, networkError}) => {
            if (graphQLErrors) {
                graphQLErrors.map(({message, locations, path}) =>
                    // TODO: should toast something here
                    console.error(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`),
                );
            }
            if (networkError) {
                // TODO: should toast something here
                console.error(`[GraphQL Network error]: ${networkError.name}, message: ${networkError.message} , stack: ${networkError.stack}`);
            }
        });
    }
}
