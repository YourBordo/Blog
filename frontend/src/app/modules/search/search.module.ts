import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {SearchComponent} from "./components/search.component";
import {FormsModule} from "@angular/forms";
import {TagService} from "../../services/tag.service";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [TagService],
  exports: [SearchComponent]
})
export class SearchModule {}
