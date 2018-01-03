import { UserBL } from "../../../core/bl/user/user-bl";

export async function members(board: any) {
    console.log(`Resolving members for board [${board.id}]`);
    return UserBL.getAll(board.members);
}
