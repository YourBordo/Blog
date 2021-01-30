import {Component, Input} from "@angular/core";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent{

  @Input() articles;
  public PAGE: number = 0;
  public ITEMS_PER_PAGE: number = 10;

}
