import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRecenzijeComponent } from './components/admin-recenzije/admin-recenzije.component';
import { AdminRepertoarComponent } from './components/admin-repertoar/admin-repertoar.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecenzijeComponent } from './components/recenzije/recenzije.component';
import { RepertoarComponent } from './components/repertoar/repertoar.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { AuthGuard } from './authentication/auth.guard';
import { AuthInterceptor } from './authentication/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminRecenzijeComponent,
    AdminRepertoarComponent,
    ForbidenComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RecenzijeComponent,
    RepertoarComponent,
    NavbarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
