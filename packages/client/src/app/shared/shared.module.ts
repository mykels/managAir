import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        ButtonComponent
    ],
    exports: [
        CommonModule,
        MatIconModule,
        ButtonComponent
    ],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [],
        };
    }
}
