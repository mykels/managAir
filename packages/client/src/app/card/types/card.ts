import { CommentActivity } from "../../user/types/activity/comment-activity";

export interface Card {
    id: string;
    title?: string;
    activities?: CommentActivity[];
}
