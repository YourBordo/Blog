import {Component, Input} from "@angular/core";
import {Article} from "../../../models/article";
import {ArticleService} from "../../../services/article.service";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Tag} from "../../../models/tag";
import {ArticleStatus} from "../../../models/enums/article-status";
import {StorageService} from "../../../services/storage.service";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'article-redaction',
  templateUrl: './article-redaction.component.html',
  styleUrls: ['./article-redaction.component.css']
})

export class ArticleRedactionComponent {
  @Input() article: Article;

  public showRedact: boolean = false;
  public currentArticleId: number;
  public currentDateTime: string;
  public tagName: string;
  myDate = new Date();
  public validTagField: boolean = true;
  public validArticleFields: boolean = true;

  constructor(private articleService: ArticleService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private datePipe: DatePipe,
              public storageService: StorageService,
              private tagService: TagService) {
    this.currentArticleId = activatedRoute.snapshot.params['id'];
    this.currentDateTime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');
  }


  deleteArticle(): void {
    if (this.storageService.getCurrentUser().id == this.article.user.id) {
      this.articleService.deleteArticle(this.currentArticleId).subscribe();
    }

    this.articleService.getArticle(this.currentArticleId).subscribe(article1 => {
      this.article = article1;
      this.router.navigate(['profile/' + this.storageService.getCurrentUser().id]).then(r => {
      });
    });
  }

  updateArticle(): void {
    this.validArticleFields = this.article.title && this.article.title.length <= 255
      && this.article.articleText && this.article.articleText.length <= 5000;
      if (this.storageService.getCurrentUser().id == this.article.user.id && this.validArticleFields) {
      this.article.updatedAt = this.currentDateTime;
      this.articleService.updateArticle(this.article).subscribe(responseArticle => {
        this.article = responseArticle;
      });
    }

    this.showRedact = !this.showRedact;

  }

  addTag(): void {
    this.validTagField = this.tagName && this.tagName.length <= 15;
    if (this.validTagField) {
      let tag: Tag = new Tag();
      tag.tagName = this.tagName;
      this.tagService.getTagsLike(this.tagName).subscribe(responseTags => {
        responseTags.forEach(responseTag=>{
          if(this.tagName == responseTag.tagName){
            tag = responseTag;
          }
        })
      });
      if (!this.article.tags) {
        this.article.tags = [];
      }
      this.article.tags.push(tag);
      this.tagName = null;
    }
  }   deleteTag(tagToDelete: Tag): void{
    this.article.tags.forEach(tag =>{
      if(tag == tagToDelete){
        let pos: number = this.article.tags.indexOf(tag);
        this.article.tags.splice(pos, 1);
      }
    })
   }

  onClick(): void {
    this.showRedact = !this.showRedact;
  }

  setArticleStatusPublic(): void {
    this.article.articleStatus = ArticleStatus.PUBLIC;
  }

  setArticleStatusDraft(): void {
    this.article.articleStatus = ArticleStatus.DRAFT;
  }

}
