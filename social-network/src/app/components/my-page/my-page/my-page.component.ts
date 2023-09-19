import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {User} from "../../../user";
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from "@angular/forms";
import {UserStore} from "../../../user.store";
import {CreateContactComponent} from "../../create-contact/create-contact.component";
import {AuthorizationStore} from "../../../authorization.store";
import {ActivatedRoute} from "@angular/router";
import {PostComponent} from "../posts/post/post.component";
import {DropdownComponent} from "../../dropdown/dropdown.component";
import {Dropdopn1Component} from "../../dropdopn1/dropdopn1.component";
import {TextfieldComponent} from "../../textfield/textfield.component";
import {RouterLink} from "@angular/router";
import {PostFormComponent} from "../post-form/post-form.component";
import {PostsComponent} from "../posts/posts.component";
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {ColorPickedComponent} from "../../color-picked/color-picked.component";


@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CreateContactComponent, PostComponent, FormsModule, DropdownComponent, Dropdopn1Component, TextfieldComponent, RouterLink, PostFormComponent, PostsComponent, ColorPickedComponent,],
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss'],
})

export class MyPageComponent {

  private readonly activatedRoute = inject(ActivatedRoute);
  public AuthorizationStore = inject(AuthorizationStore)
  // @ts-ignore

  public arr: Options[] = [
    {label: 'developer'},
    {label: 'designer'},
    {label: 'manager1'},
  ]

  public user$ = this.AuthorizationStore.selectUser();
  formGroup = new FormGroup({name: new FormControl("")})
  visibility: boolean = true;
  public user: User = {

    name: '',
    age: 0,
    id: undefined,
    password: '',
  }
  public readonly userStore = inject(UserStore)
  public isAuth$ = this.userStore.selectIsAuth();

  visibilityOff() {
    this.visibility = false
  }

  changeName(name: string) {

    if (this.formGroup.value.name?.trim().length) {
      let value = this.formGroup.value as Omit<User, "name">
      let dataValue = {...value, name}
      this.AuthorizationStore.updateDataForm(dataValue)
      // this.user.name = this.formGroup.value.name
      this.formGroup.reset({name: ''})
    }
    this.visibility = true
  }
}
