import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from "./post/post.component";
import {PostsStore} from "../../../posts.store";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,PostComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
   public postStore = inject(PostsStore)
  public posts$ = this.postStore.selectPost()
}
