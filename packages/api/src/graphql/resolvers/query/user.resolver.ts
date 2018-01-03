import { UserBL } from "../../../core/bl/user/user-bl";

export async function user(root, {id}: { id: string }) {
    console.log(`Resolving user [${id}]`);
    return UserBL.get(id);
}
