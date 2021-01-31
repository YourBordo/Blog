import {Component, Input} from "@angular/core";
import {Article} from "../../../models/article";

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent {

  @Input() article: Article;
}
