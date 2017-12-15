import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { CommentComponent } from "./components/comment/comment.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { FormsModule } from "@angular/forms";
import { ActivityComponent } from "./components/activity/activity.component";

@NgModule({
    declarations: [
        CommentComponent,
        AvatarComponent,
        ActivityComponent
    ],
    imports: [
        FormsModule,
        SharedModule
    ],
    providers: [],
    exports: [
        CommentComponent,
        AvatarComponent,
        ActivityComponent
    ],
})
export class UserModule {
    constructor() {
    }
}
