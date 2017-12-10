import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { BoardModuleRouting } from "./board.module.routing";
import { BoardNavigationComponent } from "./components/board-navigation/board-navigation.component";
import { BoardPageComponent } from "./components/board-page/board-page.component";
import { BoardTileComponent } from "./components/board-tile/board-tile.component";
import { BoardService } from "./services/board.service";

@NgModule({
    declarations: [
        BoardNavigationComponent,
        BoardTileComponent,
        BoardPageComponent,
    ],
    imports: [
        BoardModuleRouting,
        SharedModule
    ],
    providers: [
        BoardService
    ],
    exports: [
        BoardNavigationComponent,
        BoardPageComponent,
    ],
})
export class BoardModule {
    constructor() {
    }
}
