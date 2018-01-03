import { CardBL } from "../../../core/bl/board/card-bl";

export async function cards(deck: any) {
    console.log(`Resolving cards for deck [${deck.id}]`);
    return CardBL.getByDeckId(deck.id);
}
