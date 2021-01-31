import {Component} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {TagService} from "../../../services/tag.service";
import {Article} from "../../../models/article";
import {ArticleStatus} from "../../../models/enums/article-status";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  public text: string;
  public isTag: boolean = true;
  public articles: Article[] = [];

  constructor(private articleService: ArticleService,
              private tagService: TagService,
              public storageService: StorageService) {
  }

  search(): void {
    if (this.text) {
      if (this.isTag) {
        this.tagService.getTagsLike(this.text).subscribe(responseTags => {
          responseTags.forEach(tag => {
            this.articleService.getArticlesByTagId(tag.id).subscribe(responseArticles => {
              if (!this.articles.length) {
                this.articles = responseArticles;
              } else {
                this.articles.concat(responseArticles);
              }
            })
          });
          let idNumber: number = 0;
          this.articles.forEach(article => {
            idNumber = article.id;
            this.articles.forEach(article2 => {
              if (article2.id == idNumber && article != article2) {
                this.articles.splice(this.articles.indexOf(article2), 1);
              }
            })
          })
        })
      } else {
        this.articleService.getArticlesLike(this.text).subscribe(responseArticles => {
          this.articles = responseArticles;
        })
      }
      this.text = null;
      if (!this.storageService.getCurrentUser()) {
        this.removeDraftArticles();
      }
    }
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
