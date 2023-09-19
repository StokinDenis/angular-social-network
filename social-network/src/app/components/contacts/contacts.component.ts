import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from "./contact/contact.component";
import {RouterOutlet} from "@angular/router";
import {UserStore} from "../../user.store";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CreateContactComponent} from "../create-contact/create-contact.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ContactComponent, RouterOutlet, RouterLink, ReactiveFormsModule,CreateContactComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
    private readonly userStore = inject(UserStore);
    public contacts$ = this.userStore.selectContacts();
}
