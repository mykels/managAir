import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.module.routing";
import { MasterComponent } from './master/master.component';

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor() {
    }
}
