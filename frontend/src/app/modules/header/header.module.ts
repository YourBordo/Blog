import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderComponent} from "./components/header.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  exports: [HeaderComponent]
})

export class HeaderModule {

}
