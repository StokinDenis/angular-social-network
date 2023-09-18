import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable, shareReplay, Subject} from "rxjs";
import {User} from "./user";
import {logMessages} from "@angular-devkit/build-angular/src/tools/esbuild/utils";

@Injectable({
  providedIn:"root"
})
export class AuthorizationStore {
  // constructor() {
  //   this.dataForms$.subscribe(value => {console.log(value)})
  // }
   private dataForms$: BehaviorSubject<User>=new BehaviorSubject<User>(
     {name:'', age:undefined, id:undefined, password:''}
  )
  public getForms(): any{
    return this.dataForms$.getValue()
  }
  public updateDataForm(data:User){
    this.dataForms$.next(data)
  }
  public selectUser(): Observable<User>{
    return  this.dataForms$.asObservable()
  }
  userPresence(){

  }

  // public selectByName(name: string):Observable<User>{
  //   return this.selectUser().pipe(
  //     map(users=>users.find(user=>user.name===name)!)
  //   )
  // }
}
