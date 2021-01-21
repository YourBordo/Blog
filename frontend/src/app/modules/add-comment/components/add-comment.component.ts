import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Comment} from "../../../models/comment";
import {UserService} from "../../../services/user.service";
import {CommentService} from "../../../services/comment.service";
import {HttpClient} from "@angular/common/http";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})

export class AddCommentComponent {
  @Input() articleId: number;
  @Input() currentUserId: number;
  @Output() onUpdate = new EventEmitter<any>();

  comments: Comment[];
  text: string;
  currentDateTime: string;
  myDate = new Date();

  constructor(private userService: UserService,
              private commentService: CommentService,
              private httpClient: HttpClient,
              private datePipe: DatePipe) {
    this.currentDateTime = this.datePipe.transform(this.myDate, 'yyyy-MM-dd hh:mm');
  }


  addComment(): void {
    if (this.currentUserId) {
      if (this.text) {

        this.httpClient.post("/api/comment/", {
          message: this.text,
          createdAt: this.currentDateTime,
          user:
            {
              id: this.currentUserId
            },
          article:
            {
              id: this.articleId
            }

        }).subscribe(
          res => {
            this.onUpdate.emit();
          },
          err => {
            console.log('Error at addComment()');
          });

      }
    }
  }
}
