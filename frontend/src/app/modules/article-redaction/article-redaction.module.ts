import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ArticleRedactionComponent} from "./components/article-redaction.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ArticleRedactionComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule
    ],
  providers: [],
  exports: [ArticleRedactionComponent]
})
export class ArticleRedactionModule {}
