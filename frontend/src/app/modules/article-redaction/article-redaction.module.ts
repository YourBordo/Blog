import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {ArticleRedactionComponent} from "./components/article-redaction.component";
import {FormsModule} from "@angular/forms";
import {ArticleTagsRedactModule} from "../article-tags-redact/article-tags-redact.module";

@NgModule({
  declarations: [
    ArticleRedactionComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ArticleTagsRedactModule
    ],
  providers: [],
  exports: [ArticleRedactionComponent]
})
export class ArticleRedactionModule {}
