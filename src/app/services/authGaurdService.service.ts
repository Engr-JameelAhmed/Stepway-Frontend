import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Data, Router, RouterStateSnapshot } from "@angular/router";
import { UtilService } from "./util.service";
import { Observable } from "rxjs";
import { MessageService } from 'primeng/api';


interface RoleRouteData extends Data {
  expectedRole: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private service: UtilService, private router: Router,private messageService: MessageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const expectedRole = (route.data as RoleRouteData).expectedRole;
    const currentRole = this.service.getRoleFromToken();

    if (!this.service.isLoggedIn() || currentRole !== expectedRole) {
    // this.router.navigateByUrl('/access-denied');
    this.messageService.add({ severity: 'error', summary: 'Access Denied', detail: 'You cannot Access this page.' });
    return false;
    }
  return true;

  }
}
