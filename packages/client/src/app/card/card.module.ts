import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { CardComponent } from "./components/card/card.component";

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        SharedModule
    ],
    providers: [],
    exports: [
        CardComponent
    ],
})
export class CardModule {
    constructor() {
    }
}
