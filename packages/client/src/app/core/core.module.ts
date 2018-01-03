import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApolloModule } from "apollo-angular";
import { DndModule } from "ng2-dnd";
import { SharedModule } from "../shared/shared.module";
import { LoginService } from "../user/services/login.service";
import { UserModule } from "../user/user.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ApolloInitializer } from "./services/apollo/apollo-initializer";
import { ApolloLinkInitializer } from "./services/apollo/apollo-link-initializer";
import { IconLoader } from "./services/icon/icon-loader";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        UserModule,
        SharedModule,
        ApolloModule,
        DndModule.forRoot()
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ],
    providers: [ApolloInitializer, ApolloLinkInitializer, IconLoader, LoginService],
})
export class CoreModule {
}
