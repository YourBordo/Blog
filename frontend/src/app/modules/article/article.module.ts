import {ArticleComponent} from "./components/article.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ArticleService} from "../../services/article.service";
import {UserService} from "../../services/user.service";
import {CommentsModule} from "../comments/comments.module";
import {NotFoundModule} from "../not-found/not-found.module";

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CommentsModule,
    NotFoundModule
  ],
  providers: [ArticleService, UserService],
  exports: [ArticleComponent]
})
export class ArticleModule {}
