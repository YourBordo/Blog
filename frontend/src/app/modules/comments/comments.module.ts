import {NgModule} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {CommentsComponent} from "./components/comments.component";
import {UserService} from "../../services/user.service";
import {CommentService} from "../../services/comment.service";
import {FormsModule} from "@angular/forms";
import {AddCommentModule} from "../add-comment/add-comment.module";

@NgModule({
  declarations: [
    CommentsComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        AddCommentModule
    ],
  providers: [UserService, CommentService, DatePipe],
  exports: [CommentsComponent]
})
export class CommentsModule {}
