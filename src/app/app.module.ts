import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './header/menu.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroSectionComponent } from './home/hero-section/hero-section.component';
import { DividerComponent } from './home/divider/divider.component';
import { SuccessComponent } from './home/success/success.component';
import { MissionComponent } from './home/mission/mission.component';
import { JoinUsComponent } from './home/join-us/join-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes =  [

  // { path: '', redirectTo: 'home', pathMatch: 'full'},  // this or below one are both techniques to redirect to home page
  { path: '', component: HomeComponent },
  { path: 'home', component:  HomeComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'courses', component:  CoursesComponent},
  { path: 'signup', component:  SignUpComponent},
  { path: '**', component: NotFoundComponent }

]



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroSectionComponent,
    DividerComponent,
    SuccessComponent,
    MissionComponent,
    JoinUsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CoursesComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
