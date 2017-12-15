import { User } from "../user";

export interface CommentActivity {
    id?: string;
    owner?: User;
    comment?: Comment;
}