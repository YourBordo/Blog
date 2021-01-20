import {ArticleComponent} from "./components/article.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ArticleService} from "../../services/article.service";

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [ArticleService],
  exports: [ArticleComponent]
})
export class ArticleModule {}
