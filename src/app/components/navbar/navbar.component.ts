import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public logOut() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }
}