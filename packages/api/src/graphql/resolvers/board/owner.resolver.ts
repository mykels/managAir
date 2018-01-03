import { UserBL } from "../../../core/bl/user/user-bl";

export async function owner(board: any) {
    console.log(`Resolving board owner for user [${board.owner}]`);
    return UserBL.get(board.owner);
}
