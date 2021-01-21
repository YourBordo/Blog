import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {CommentsComponent} from "./components/comments.component";
import {UserService} from "../../services/user.service";
import {CommentService} from "../../services/comment.service";

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [UserService, CommentService],
  exports: [CommentsComponent]
})
export class CommentsModule {}
