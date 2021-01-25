import {Component} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {TagService} from "../../../services/tag.service";
import {Article} from "../../../models/article";
import {ArticleStatus} from "../../../models/enums/article-status";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent{

  public currentUserId: number = 1;
  public text: string;
  public isTag: boolean = true;
  public articles: Article[] =[];
  public page: number = 0;
  public itemsPerPageAmount: number = 1;

  constructor(private articleService: ArticleService,
              private tagService: TagService) {
  }

  search(): void{
    this.articles = [];
    if(this.isTag){
      this.tagService.getTagsLike(this.text).subscribe(responseTags =>{
        responseTags.forEach(tag=>{
          this.articleService.getArticleByTagId(tag.id).subscribe(responseArticle =>{
            this.articles.push(responseArticle);
          })
        })
      })
    }else{
      this.articleService.getArticlesLike(this.text).subscribe(responseArticles=>{
        this.articles = responseArticles;
      })
    }
    if (!this.currentUserId) {
      this.removeDraftArticles();
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
