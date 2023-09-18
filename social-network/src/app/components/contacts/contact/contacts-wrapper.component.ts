import {ChangeDetectionStrategy, Component} from "@angular/core";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'contacts-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: '<router-outlet />'
})
export class ContactsWrapperComponent {}
