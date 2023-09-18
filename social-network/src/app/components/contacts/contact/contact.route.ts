import { Route } from "@angular/router";
import {ContactsComponent} from "../contacts.component";
import {UserPageComponent} from "../../user-page/user-page.component";
import {ContactsWrapperComponent} from "./contacts-wrapper.component";

export const CONTACT_ROUTES: Route[] = [
  {
    path: "",
    component: ContactsWrapperComponent,
      children: [
        {
          path: '',
          pathMatch: "full",
          redirectTo: 'list',
        },
        {
          path: 'list',
          component: ContactsComponent,
        },
        {
          path: ":id",
          component: UserPageComponent,
        },
      ],
  },
];
