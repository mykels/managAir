import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { User } from "app/user/types/user";
import { Observable } from "rxjs/Observable";
import { CommentActivity } from "../../user/types/activity/comment-activity";
import { cardQuery } from "../graphql/queries/card.query";
import { Card } from "../types/card";

@Injectable()
export class CardService {
    constructor(private apollo: Apollo) {

    }

    getCard(id: string): Observable<Card> {
        console.info(`Fetching card with id [${id}]`);

        return this.apollo.watchQuery({
            query: cardQuery,
            variables: {id}
        }).valueChanges.map(
            ({data, loading}) => {
                console.info("cardQuery card: ", (data as any).card as Card);
                return (data as any).card as Card;
            }
        );
    }

    saveComment(card: Card, comment: Comment, owner: User) {
        let commentActivity: CommentActivity = {
            id: (Math.floor(Math.random() * 100000)).toString(),
            comment,
            owner
        };

        if (!card.activities) {
            card.activities = [];
        }

        card.activities.push(commentActivity);
    }
}
