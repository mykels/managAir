import { UserBL } from "../../../core/bl/user/user-bl";

export async function me(root) {
    console.log(`Resolving me`);
    return UserBL.getCurrentUser();
}
