import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  loggedRole: string = 'visitor';

  constructor(private utilService: UtilService, private router: Router, private messageService: MessageService){}

  ngOnInit(): void {
    this.setRole();
    this.utilService.roleChanged.subscribe(role => {
      this.loggedRole = role;
    });
  }
  setRole() {
    const role = this.utilService.getRoleFromToken();
    if (role) {
      this.loggedRole = role;
    } else {
      this.loggedRole = 'visitor';
    }
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.loggedRole = 'visitor';
    this.router.navigateByUrl('/login'); // Navigate to the login page after logout
    this.messageService.add({ severity: 'success', summary: 'Logout Successful', detail: 'Welcome back!' });
  }

}
