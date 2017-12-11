import { RouterModule, Routes } from '@angular/router';
import { BoardPageComponent } from "./components/board-page/board-page.component";
import { BoardBrowserComponent } from "./components/board-browser/board-browser.component";

const routes: Routes = [
    {
        path: '',
        component: BoardBrowserComponent,
    },
    {
        path: ':id',
        component: BoardPageComponent,
    },
];

export const BoardModuleRouting = RouterModule.forChild(routes);
