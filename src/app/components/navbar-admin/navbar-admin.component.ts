import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
}