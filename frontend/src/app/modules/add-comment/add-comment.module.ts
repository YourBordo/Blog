import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {AddCommentComponent} from "./components/add-comment.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [AddCommentComponent]
})
export class AddCommentModule {}
