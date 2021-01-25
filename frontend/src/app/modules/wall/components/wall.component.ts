import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../models/article";
import {ArticleStatus} from "../../../models/enums/article-status";
import {Page} from "../../../models/page";
import {Order} from "../../../models/enums/order";
import {Sort} from "../../../models/enums/sort";

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

export class WallComponent implements OnInit {
  public currentUserId: number = 1;
  public articles: Article[];
  public page: number = 0;
  public itemsPerPageAmount: number = 1;
  public order: Order = Order.ASC;
  public sort: Sort = Sort.TITLE;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(responseArticles => {
      this.articles = responseArticles;

      if (!this.currentUserId) {
        this.removeDraftArticles();
      }
    })

  }

  removeDraftArticles(): void {
    this.articles.forEach(article => {
      if (article.articleStatus == ArticleStatus.DRAFT) {
        this.articles.splice(this.articles.indexOf(article), 1);
      }
    });
    if (this.hasDraft(this.articles)) {
      this.removeDraftArticles();
    }
  }

  hasDraft(articles: Article[]): boolean {
    let flag: boolean = false;
    articles.forEach(article => {
      if (article.articleStatus == ArticleStatus.DRAFT) {
        flag = true;
      }
    });
    return flag;
  }


}
