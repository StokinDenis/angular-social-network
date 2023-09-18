import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup,ReactiveFormsModule} from "@angular/forms";
import {PostsStore} from "../../../../posts.store";
import {Post} from "../../../../post";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!:Post
}
