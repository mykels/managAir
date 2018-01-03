import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs/Observable";
import { meQuery } from "../graphql/queries/me.query";
import { User } from "../types/user";

@Injectable()
export class LoginService {
    constructor(private apollo: Apollo) {
    }

    login() {

    }

    getLoggedInUser(): Observable<User> {
        return this.apollo.watchQuery({
            query: meQuery
        }).valueChanges.map(
            ({data, loading}) => {
                console.info("meQuery user: ", (data as any).me as User);
                return (data as any).me as User;
            }
        );
    }
}
