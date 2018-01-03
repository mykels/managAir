import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material";
import { DndModule } from "ng2-dnd";
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../user/user.module";
import { CardDialogComponent } from "./components/card-dialog/card-dialog.component";
import { CardComponent } from "./components/card/card.component";
import { CardService } from "./services/card.service";

@NgModule({
    declarations: [
        CardComponent,
        CardDialogComponent,
    ],
    imports: [
        DndModule.forRoot(),
        MatDialogModule,
        UserModule,
        SharedModule
    ],
    entryComponents: [CardDialogComponent],
    providers: [
        CardService
    ],
    exports: [
        CardComponent
    ],
})
export class CardModule {
    constructor() {
    }
}
