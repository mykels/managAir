import { CommentActivity } from "./activity/comment-activity";

export interface User {
    id: string;
    name: string;
    nick?: string;
    imageUrl?: string;
    activities?: CommentActivity[];
}
