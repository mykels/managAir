import { Injectable } from "@angular/core";
import { Card } from "../types/card";
import { User } from "app/user/types/user";
import { CommentActivity } from "../../user/types/activity/comment-activity";

@Injectable()
export class CardService {
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