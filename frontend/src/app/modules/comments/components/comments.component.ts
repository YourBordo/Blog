import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {CommentService} from "../../../services/comment.service";
import {Comment} from "../../../models/comment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {


  @Input() articleId: number;
  @Input() currentUserId: number;
  comments: Comment[];

  constructor(private userService: UserService,
              private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.commentService.getCommentsByArticleId(this.articleId).subscribe(comments => {
      this.comments = comments;
      this.getUsersFromComments();
    })

  }

  getUsersFromComments(): void {
    if (this.comments) {
      this.comments.forEach((comment) => {
          this.userService.getUserByCommentId(comment.id).subscribe(user => {
            comment.user = user;
          })
        }
      )
    }
  }

  deleteComment(commentToDelete: Comment): void {
    if (this.currentUserId == commentToDelete.user.id) {
      this.commentService.deleteComment(commentToDelete.id).subscribe();
      this.getComments();

    }

  }


}
