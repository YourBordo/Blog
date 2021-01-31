import {Component, OnInit} from "@angular/core";
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../models/article";
import {Tag} from "../../../models/tag";
import {DatePipe} from "@angular/common";
import {ArticleStatus} from "../../../models/enums/article-status";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {StorageService} from "../../../services/storage.service";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent implements OnInit {
  public article: Article = new Article();
  public tagName: string;
  public status: ArticleStatus;
  myDate = new Date();
  public currentDateTime: string;
  public validArticleFields: boolean = true;
  public validTagField: boolean = true;

  constructor(private articleService: ArticleService,
              private datePipe: DatePipe,
              private router: Router,
              public storageService: StorageService,
              public tagService: TagService) {
    this.currentDateTime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');
  }

  ngOnInit(): void {
    this.status = ArticleStatus.PUBLIC;

  }

  addArticle(): void {

    this.validArticleFields = this.article.title && this.article.title.length <= 255
      && this.article.articleText && this.article.articleText.length <= 5000;

    if (this.storageService.getCurrentUser() && this.validArticleFields) {
      this.article.user = new User();
      this.article.user.id = this.storageService.getCurrentUser().id;
      this.article.createdAt = this.currentDateTime;
      this.article.updatedAt = this.currentDateTime;
      let currentArticle: Article = new Article(undefined, this.article.title,
        this.article.articleText, this.article.createdAt, this.article.updatedAt,
        this.status, this.article.tags,
        undefined, this.article.user);
      this.articleService.saveArticle(currentArticle).subscribe(responseArticle => {
        this.router.navigate(['article/' + responseArticle.id]).then();
      })
    }
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
  }

  deleteTag(tagToDelete: Tag): void {
    if (this.article.tags) {
      this.article.tags.forEach(tag => {
        if (tag == tagToDelete) {
          let pos: number = this.article.tags.indexOf(tag);
          this.article.tags.splice(pos, 1);
        }
      })
    }
  }

  setArticleStatusPublic(): void {
    this.status = ArticleStatus.PUBLIC;
  }

  setArticleStatusDraft(): void {
    this.status = ArticleStatus.DRAFT;
  }
}

