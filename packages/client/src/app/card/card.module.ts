import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material";
import { SharedModule } from "../shared/shared.module";
import { CardDialogComponent } from "./components/card-dialog/card-dialog.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
    declarations: [
        CardComponent,
        CardDialogComponent
    ],
    imports: [
        MatDialogModule,
        SharedModule
    ],
    entryComponents: [CardDialogComponent],
    providers: [],
    exports: [
        CardComponent
    ],
})
export class CardModule {
    constructor() {
    }
}
