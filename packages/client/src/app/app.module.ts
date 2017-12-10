import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.module.routing";
import { BoardModule } from "./board/board.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { MasterComponent } from "./view/master/master.component";

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        SharedModule.forRoot(),
        BoardModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
    }
}
