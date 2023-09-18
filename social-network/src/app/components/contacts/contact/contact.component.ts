import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Contact} from "../../../contact";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
@Input() contact!:Contact
}
