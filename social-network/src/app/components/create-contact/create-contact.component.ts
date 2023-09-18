import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserStore} from "../../user.store";
import {Contact} from "../../contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-contact',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent {
  public formGroup = new FormGroup({
    name: new FormControl<string>("", [Validators.required]),
    age: new FormControl<number|null>(null, [Validators.required]),
    description: new FormControl<string>(""),
    role: new FormControl<string>(""),
  })
  public router = inject(Router)
  public userStore = inject(UserStore)

  private generateId(): number {
    return Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 2) + 1);
  }

  addContact() {
    if (this.formGroup.status !== "INVALID") {

      const value = this.formGroup.value as Omit<Contact, 'id'>;//хуй пойми пока
      const data = {...value, id: this.generateId()}//в data кладем наш объект из форм
      this.userStore.addContact(data);
      this.userStore.updateAuth(true);
      this.router.navigate(["/contacts"])
      // console.log(value)
      // console.log(this.userStore.getContacts())
    }
  }

  public get nameControl(): AbstractControl {
    return this.formGroup.get('name')!;
  }

}
