import {Component} from "@angular/core";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'header-module',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})

export class HeaderComponent   {
  constructor(public storageService: StorageService) {
  }


  public logout(): void {
    this.storageService.clearToken();
    this.storageService.setCurrentUser(null);
  }

}
