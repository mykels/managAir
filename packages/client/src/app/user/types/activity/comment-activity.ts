import { User } from "../user";
import { Comment } from "../comment";

export interface CommentActivity {
    id?: string;
    owner?: User;
    comment?: Comment;
}
