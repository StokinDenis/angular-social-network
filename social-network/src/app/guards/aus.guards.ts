import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {UserStore} from "../user.store";

// export const test = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   return false;
// }

export const authGuardFn: CanActivateFn = () => {
  const authService = inject(UserStore);
  const router = inject(Router);

  if (authService.getIsAuth()) {
    return true;
  }
  void router.navigate(['/loginRegistration'])

  return false;
}

export const registrGuardFn:CanActivateFn=()=>{
  const authService=inject(UserStore)
  if(!authService.getIsAuth()){
    return true
  }
  return false
}
export const notAuthUserFn: CanActivateFn = () => {
  const authService = inject(UserStore);
  const router = inject(Router);

  // if(authService.getIsAuth()){
  //
  //   void router.navigate(['/myPage'])
  //
  //   return false;
  // }

  return true;
}
