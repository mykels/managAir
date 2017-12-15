import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "../shared/shared.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IconLoader } from "./services/icon-loader";
import { UserModule } from "../user/user.module";
import { LoginService } from "../user/services/login.service";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        UserModule,
        SharedModule
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ],
    providers: [IconLoader, LoginService],
})
export class CoreModule {
}
