import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UserStore} from "../../user.store";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.scss']
})
export class LoginRegistrationComponent{
 public formGroup = new FormGroup({
   name:new FormControl(""),
   age:new FormControl(""),
   description:new FormControl(""),
   role:new FormControl(""),
 })
  public userStore = inject(UserStore)
}
