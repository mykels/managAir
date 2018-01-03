import { CardBL } from "../../../core/bl/board/card-bl";

export async function card(card, {id}: { id: string }) {
    console.log(`Resolving card [${id}]`);
    return CardBL.get(id);
}
