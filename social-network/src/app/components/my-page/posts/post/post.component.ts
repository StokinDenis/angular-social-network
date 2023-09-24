import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {PostsStore} from "../../../../posts.store";
import {Post} from "../../../../post";
import {Disabled} from "../../../../disabled";

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
  isDisabledTextarea: Disabled = {disabled: true}
  buttonText: string = 'edit'
  borderColorTextarea:boolean=false

  editPost() {
    // console.log(this.postStore.getPosts())
    this.borderColorTextarea=!this.borderColorTextarea
    if (this.isDisabledTextarea.disabled === null) {
      this.isDisabledTextarea.disabled = true
    } else this.isDisabledTextarea.disabled = null

    if (this.isDisabledTextarea.disabled === true) {
      this.buttonText = 'edit'
    } else this.buttonText = 'save'
  }
}
