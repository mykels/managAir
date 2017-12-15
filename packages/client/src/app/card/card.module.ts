import { NgModule } from '@angular/core';
import { MatDialogModule } from "@angular/material";
import { SharedModule } from "../shared/shared.module";
import { CardDialogComponent } from "./components/card-dialog/card-dialog.component";
import { CardComponent } from "./components/card/card.component";
import { UserModule } from "../user/user.module";
import { CardService } from "./services/card.service";

@NgModule({
    declarations: [
        CardComponent,
        CardDialogComponent
    ],
    imports: [
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
