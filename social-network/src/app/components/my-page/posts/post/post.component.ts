import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PostsStore} from "../../../../posts.store";
import {Post} from "../../../../post";


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  public postStore = inject(PostsStore)
  @Input()
  post!: Post
  isDisabledTextarea: boolean|null = true
  buttonText: string = 'edit'
  borderColorTextarea:boolean=false

  editPost() {
    // console.log(this.postStore.getPosts())
    this.borderColorTextarea=!this.borderColorTextarea
    if (this.isDisabledTextarea === null) {
      this.isDisabledTextarea = true
    } else this.isDisabledTextarea = null

    if (this.isDisabledTextarea === true) {
      this.buttonText = 'edit'
    } else this.buttonText = 'save'
  }
}
