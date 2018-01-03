import { NgModule } from '@angular/core';
import { DndModule } from "ng2-dnd";
import { DeckModule } from "../deck/deck.module";
import { SharedModule } from "../shared/shared.module";
import { BoardModuleRouting } from "./board.module.routing";
import { BoardBrowserComponent } from "./components/board-browser/board-browser.component";
import { BoardPageComponent } from "./components/board-page/board-page.component";
import { BoardTileComponent } from "./components/board-tile/board-tile.component";
import { BoardService } from "./services/board.service";

@NgModule({
    declarations: [
        BoardBrowserComponent,
        BoardTileComponent,
        BoardPageComponent,
    ],
    imports: [
        DndModule.forRoot(),
        BoardModuleRouting,
        DeckModule,
        SharedModule
    ],
    providers: [
        BoardService
    ],
    exports:
        [
            BoardBrowserComponent,
            BoardPageComponent,
        ],
})

export class BoardModule {
    constructor() {
    }
}
