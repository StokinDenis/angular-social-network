import {Injectable} from "@angular/core";
import {Contact} from "./contact";
import {BehaviorSubject, map, Observable} from "rxjs";
import {User} from "./user";


@Injectable({providedIn: "root"})
export class UserStore {
  private readonly isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private readonly contacts$: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([
    {name: "Ura", age: 24, role: 'developer', avatar: '/assets/ava_contact1.jpg', description: "", id: 1},
    {name: "Alex", age: 21, role: 'developer', avatar: '/assets/ava_contact2.jpg', id: 2},
    {name: "Petya", age: 46, role: 'builder', avatar: '/assets/ava_contact3.jpg', id: 3},
    {name: "Borya", age: 54, role: 'designer', avatar: '/assets/ava_contact4.jpg', id: 4},
  ])
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {name: "Ura", age: 24, role: 'developer',  password:'12345',  avatar: '/assets/ava_contact1.jpg', description: "", id: 1},
    {name: "Alex",  age: 21, role: 'developer', password:'12345', avatar: '/assets/ava_contact2.jpg', id: 2},
    {name: "Petya", age: 46, role: 'builder',   password:'12345', avatar: '/assets/ava_contact3.jpg', id: 3},
    {name: "Borya", age: 54, role: 'designer',  password:'12345', avatar: '/assets/ava_contact4.jpg', id: 4},
    {name: "Denis", age: 20, role: 'developer', password:'12345', avatar: '/assets/ava_contact4.jpg', id: 4},
  ])

  public getUsers(): User[] {
    return this.users$.getValue()
  }
  public selectUser(): Observable<User[]> {
    return this.users$.asObservable()
  }

  public checkExistenceUserName(name: string) {
    let user: number = 0
    this.users$.getValue().forEach(item => {
      if (item.name === name) {
        user = 1
      }
    })
    if (user === 1) {
      return true
    } else {
      return false
    }
  }
  public checkExistenceUserPassword(name:string,  password: string) {
    let existenceUser:boolean=false
    console.log(name)
    console.log(password)
    if(this.checkExistenceUserName(name)){
      this.users$.getValue().forEach(item=>{if(item.name===name && item.password===password){
        existenceUser=true
      }})
    }
    if(existenceUser){
      return true
    }
    else{
      return false
    }

  }
  public getIsAuth(): boolean {
    return this.isAuth$.getValue();
  }

  public selectIsAuth(): Observable<boolean> {
    return this.isAuth$.asObservable();
  }

  public getContacts(): Contact[] {
    return this.contacts$.getValue();
  }

  public selectContacts(): Observable<Contact[]> {
    return this.contacts$.asObservable();
  }

  public selectUserById(id: number): Observable<Contact> {
    return this.selectContacts().pipe(
      map(users => users.find(user => user.id === id)!)
    )
  }

  public addContact(data: Contact): void {
    this.contacts$.next([...this.getContacts(), data]);
  }

  public updateAuth(isAuth: boolean): void {
    this.isAuth$.next(isAuth);
  }

  public addUser(data: User) {
    this.users$.next([...this.getUsers(), data])
  }

}
