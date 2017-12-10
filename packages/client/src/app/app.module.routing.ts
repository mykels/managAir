import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MasterComponent } from "./view/master/master.component";

const routes: Routes = [
    {
        path: '',
        component: MasterComponent,
        children: [
            {
                path: 'board',
                loadChildren: 'app/board/board.module#BoardModule'
            },
            {
                path: '',
                redirectTo: 'board',
                pathMatch: 'full',
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false, // <-- debugging purposes only
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
