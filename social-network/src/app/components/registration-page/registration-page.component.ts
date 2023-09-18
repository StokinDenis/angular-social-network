import {Component, inject, Injectable, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, ControlValueAccessor} from "@angular/forms";
  import {User} from "../../user";
import {UserStore} from "../../user.store";
import {Contact} from "../../contact";
import {Router} from "@angular/router";
import {AuthorizationStore} from "../../authorization.store";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent{
  public formGroup = new FormGroup({
    name: new FormControl<string>("", [Validators.required]),
    age: new FormControl<string | null>(null, [Validators.required]),
    description: new FormControl<string>(""),
    role: new FormControl<string>(""),
  })

  public userStore = inject(UserStore)
  public userStore$ = this.userStore.getUsers()
  public router = inject(Router)
  public AuthorizationStore = inject(AuthorizationStore)//new1
  private generateId(): number {
    return Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 2) + 1);
  }

  public userExistenceNotification: string = ''
  public emptyField: boolean = true

  public addUser(): void {
    console.log("вошел")
    if (this.fieldValidation() && this.existenceСheck()) {
      console.log(this.fieldValidation())
      // @ts-ignore
      const valueUser = this.formGroup.value as Omit<User, 'id'>;//хуй пойми пока
      // @ts-ignore
      const valueForm = this.formGroup.value as Omit<User, 'id'>;//new2
      let id=this.generateId()
      const data = {...valueUser, id: id}//в data кладем наш объект из форм
      const dataForm = {...valueForm, id: id}//new3
      this.AuthorizationStore.updateDataForm(dataForm)//new4
      console.log(this.AuthorizationStore.getForms())//new5
      this.userExistenceNotification = ''
      this.userStore.addUser(data)

        // console.log(this.userStore.getUsers())
      void this.router.navigate(['/myPage'])
      //  console.log(this.userStore.getIsAuth())
      this.userStore.updateAuth(true)
      //  console.log(this.userStore.getIsAuth())

    }

  }


  fieldValidation() {
    if (this.formGroup.value.name?.trim() != '' && this.formGroup.value.age?.trim()) { // переделать обращаясь к валидности формы
      this.emptyField = true
      return true
    } else {
      this.emptyField = false
      return false
    }
  }

  existenceСheck() {
    if (this.userStore.checkExistenceUserName(this.formGroup.value.name!)) {
      this.userExistenceNotification = 'пользователь с таким имеменм уже существует'
      return false
    }
    return true
  }



  // addUser(){
  // let a = this.userPresence()
  //   // @ts-ignore
  //   if(a===true){
  //     const value = this.formGroup.value as Omit<User, any>;
  //
  //     const data = {...value}
  //
  //     this.userStore.addUser(data);
  //   }
  // }
}
