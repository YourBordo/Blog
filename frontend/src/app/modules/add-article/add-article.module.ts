import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AddArticleComponent} from "./components/add-article.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddArticleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [AddArticleComponent]
})
export class AddArticleModule {}
