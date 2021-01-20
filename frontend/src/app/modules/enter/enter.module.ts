import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {EnterComponent} from "./components/enter.component";

@NgModule({
  declarations: [
    EnterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [EnterComponent]
})
export class EnterModule {}
