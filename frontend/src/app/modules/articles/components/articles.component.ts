import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {

  @Input() articles;
  public PAGE: number = 0;
  public ITEMS_PER_PAGE: number = 10;

  ngOnInit(): void {
    this.articles.forEach(article => {
      if (article.title.length >= 30) {
        article.title = article.title.substring(0, 30) + "...";
      }
      article.articleText = article.articleText.substring(0, 50) + "...";
    })
  }
}
