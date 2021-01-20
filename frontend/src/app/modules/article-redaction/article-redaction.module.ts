import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ArticleRedactionComponent} from "./components/article-redaction.component";

@NgModule({
  declarations: [
    ArticleRedactionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [ArticleRedactionComponent]
})
export class ArticleRedactionModule {}
