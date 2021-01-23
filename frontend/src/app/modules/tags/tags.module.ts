import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {TagsComponent} from "./components/tags.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TagsComponent
  ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule
    ],
  providers: [],
  exports: [TagsComponent]
})
export class TagsModule {}
