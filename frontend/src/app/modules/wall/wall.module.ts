import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {WallComponent} from "./components/wall.component";

@NgModule({
  declarations: [
    WallComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [WallComponent]
})
export class WallModule {}
