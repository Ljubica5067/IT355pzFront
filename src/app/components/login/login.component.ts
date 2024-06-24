import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/auth/user-auth.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService, 
              private userAuthService: UserAuthService,
              private router: Router) { }

  login(loginForm:NgForm){
    this.userService.login(loginForm.value).subscribe(
      (response:any) => {
        console.log(response.jwtToken);
        console.log(response.user.role)

        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        console.log(response);
        const role = response.user.role[0].roleName;
        if(role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      

        

      
      },
      (error) => {
        console.log(error);
        alert("Unesite pravilno korisnicko ime i lozinku i pokusajte opet!")
      }
    )
  }
  ngOnInit(): void {
    
  }
}
