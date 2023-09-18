import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {UserStore} from "../../user.store";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthorizationStore} from "../../authorization.store";
import {User} from "../../user";

@Component({
  selector: 'app-authorization-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
})
export class AuthorizationPageComponent {
  public router = inject(Router)
  public userStore = inject(UserStore)
  public authorizationStore = inject(AuthorizationStore)
  public formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    age: new FormControl<null | string>(null),
    role: new FormControl<string>(''),
    password: new FormControl<string>('', [Validators.required])
  })

  logIn(): void {
    const valueUser = this.formGroup.value as Omit<User, 'id'>
    let id: number | undefined = undefined

    this.userStore.getUsers().forEach(item => {
      if (item.name === this.formGroup.value.name) {
        id = item.id
      }
    })

    const data = {...valueUser, id: id}
    this.authorizationStore.updateDataForm(data)

    if (this.fieldValidation() && this.existenceСheck()) {
      console.log("второй вход в logIN")
      this.userStore.updateAuth(true)
      void this.router.navigate(['/myPage'])
    }
  }

  public emptyField: boolean = true

  fieldValidation() {
    if (this.formGroup.value.name?.trim() != '' && this.formGroup.value.password?.trim()) { // переделать обращаясь к валидности формы
      this.emptyField = true
      return true
    } else {
      this.emptyField = false
      return false
    }
  }

  public userDoesNotExist: string = ''
  public suitablePassword: string = ''

  existenceСheck() {
    if (this.userStore.checkExistenceUserPassword(this.formGroup.value.name!, this.formGroup.value.password!)) {
      return true
    }

    if (!this.userStore.checkExistenceUserName(this.formGroup.value.name!)) {
      this.userDoesNotExist = 'пользователя с таким именем не существует'
    } else {
      this.userDoesNotExist = ''
      if (!this.userStore.checkExistenceUserPassword(this.formGroup.value.name!, this.formGroup.value.password!)) {
        this.suitablePassword = 'неверный пароль'
      }
    }


    return false
  }

}
