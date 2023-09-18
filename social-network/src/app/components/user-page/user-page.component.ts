import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {UserStore} from "../../user.store";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly userStore = inject(UserStore);

  public user$ = this.userStore.selectUserById(+this.activatedRoute.snapshot.paramMap.get('id')!)
}
