import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { MatButtonModule, MatIconModule, MatInputModule } from "@angular/material";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
    ],
    declarations: [
        ButtonComponent,
    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        ButtonComponent,
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
