import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLinkInitializer } from "./apollo-link-initializer";

@Injectable()
export class ApolloInitializer {
    constructor(private apollo: Apollo,
                private apolloLinkInitializer: ApolloLinkInitializer) {
    }

    init() {
        this.apollo.create({
            link: this.apolloLinkInitializer.init(),
            cache: this.initCacheStrategy()
        });
    }

    private initCacheStrategy() {
        return new InMemoryCache();
    }
}
