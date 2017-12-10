import { RouterModule, Routes } from '@angular/router';
import { BoardNavigationComponent } from "./components/board-navigation/board-navigation.component";
import { BoardPageComponent } from "./components/board-page/board-page.component";

const routes: Routes = [
    {
        path: '',
        component: BoardNavigationComponent,
    },
    {
        path: ':id',
        component: BoardPageComponent,
    },
];

export const BoardModuleRouting = RouterModule.forChild(routes);
