import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup,ReactiveFormsModule} from "@angular/forms";
import {PostsStore} from "../../../posts.store";
import {Post} from "../../../post";

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  public formGroup = new FormGroup({
    post: new FormControl('')
  })
  public postStore = inject(PostsStore)
  addPost(){
    if(this.formGroup.value.post?.trim()!='') {
      const value = this.formGroup.value as Omit<Post, 'post'>
      const data = {...value, post: this.formGroup.value.post!}
      this.postStore.addPost(data)
      this.formGroup.reset({post: ''})
    }
  }
}
