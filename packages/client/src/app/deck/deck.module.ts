import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { DeckComponent } from "./components/deck/deck.component";

@NgModule({
    declarations: [
        DeckComponent
    ],
    imports: [
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
