import {Routes} from '@angular/router';
import {MyPageComponent} from "./components/my-page/my-page/my-page.component";
import {NewsComponent} from "./components/news/news/news.component";
import {authGuardFn, notAuthUserFn, registrGuardFn} from "./guards/aus.guards";
import {RegistrationPageComponent} from "./components/registration-page/registration-page.component";
import {LoginRegistrationComponent} from "./components/login-registration/login-registration.component";
import {AuthorizationPageComponent} from "./components/authorization-page/authorization-page.component";
import {PageChangeDataUserComponent} from "./components/page-change-data-user/change-data-user.component";
import {ContactComponent} from "./components/contacts/contact/contact.component";

export const routes: Routes = [
  {path: "", redirectTo: 'myPage', pathMatch: "full"},
  {path: 'myPage', component: MyPageComponent, canActivate: [authGuardFn,]},
  {path: "registration", component: RegistrationPageComponent, canActivate:[registrGuardFn,]},
  {
    path: "contacts", canActivate: [authGuardFn],
    loadChildren: () => import('./components/contacts/contact/contact.route').then(routes => routes.CONTACT_ROUTES)
  },
  {path: "news",  component: NewsComponent, canActivate: [authGuardFn]},
  {
    path: 'createUser',
    canActivate: [notAuthUserFn],
    loadChildren: () => import('./components/create-contact/createContact.route').then(routes => routes.CREATE_ACCOUNT_ROUTE)
  },
  {
    path:'changeData',
    component: PageChangeDataUserComponent,
    canActivate: [authGuardFn,]
  },
  {
    path: 'loginRegistration',
    component: LoginRegistrationComponent,
  },
  {
    path: 'logIn',
    component: AuthorizationPageComponent,
  }
];
