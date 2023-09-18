import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Post} from "./post";
import {FormControl, ɵValue} from "@angular/forms";

@Injectable({providedIn: "root"})

export class PostsStore {
  private posts$: BehaviorSubject<Post[]>=new BehaviorSubject<Post[]>([

  ])

  getPosts(){
    return this.posts$.getValue()
  }

  selectPost(){
    return this.posts$.asObservable()
  }

  addPost(post:Post){
    this.posts$.next([...this.getPosts(), post])
  }
}
