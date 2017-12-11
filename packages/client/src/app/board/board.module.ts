import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { BoardModuleRouting } from "./board.module.routing";
import { BoardPageComponent } from "./components/board-page/board-page.component";
import { BoardTileComponent } from "./components/board-tile/board-tile.component";
import { BoardService } from "./services/board.service";
import { BoardBrowserComponent } from "./components/board-browser/board-browser.component";
import { DeckModule } from "../deck/deck.module";

@NgModule({
    declarations: [
        BoardBrowserComponent,
        BoardTileComponent,
        BoardPageComponent,
    ],
    imports: [
        BoardModuleRouting,
        DeckModule,
        SharedModule
    ],
    providers: [
        BoardService
    ],
    exports: [
        BoardBrowserComponent,
        BoardPageComponent,
    ],
})
export class BoardModule {
    constructor() {
    }
}
