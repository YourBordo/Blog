import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./components/footer.component";

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [FooterComponent]
})
export class FooterModule {}
