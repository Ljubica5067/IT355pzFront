import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecenzijeComponent } from './components/recenzije/recenzije.component';
import { RepertoarComponent } from './components/repertoar/repertoar.component';
import { AdminRepertoarComponent } from './components/admin-repertoar/admin-repertoar.component';
import { AdminRecenzijeComponent } from './components/admin-recenzije/admin-recenzije.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'admin',
    component : AdminComponent,
    canActivate : [AuthGuard],
    data : {roles:['Admin']}
  },
  {
    path : 'home',
    component : HomeComponent,
    canActivate : [AuthGuard],
    data : {roles:['User']}
  },
  {
    path : 'forbiden',
    component : ForbidenComponent
  },

  {
    path : 'recenzije',
    component : RecenzijeComponent
  },
  {
    path : 'repertoar',
    component : RepertoarComponent
  },
  {
    path : 'adminrepertoar',
    component : AdminRepertoarComponent
  },
  {
    path : 'adminrecenzije',
    component : AdminRecenzijeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
