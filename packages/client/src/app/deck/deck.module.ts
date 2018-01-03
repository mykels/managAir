import { NgModule } from '@angular/core';
import { DndModule } from "ng2-dnd";
import { CardModule } from "../card/card.module";
import { SharedModule } from "../shared/shared.module";
import { DeckComponent } from "./components/deck/deck.component";

@NgModule({
    declarations: [
        DeckComponent
    ],
    imports: [
        DndModule.forRoot(),
        CardModule,
        SharedModule
    ],
    providers: [],
    exports: [
        DeckComponent
    ],
})
export class DeckModule {
    constructor() {
    }
}
