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
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { CourseService } from './services/course.service';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';


const routes: Routes =  [

  // { path: '', redirectTo: 'home', pathMatch: 'full'},  // this or below one are both techniques to redirect to home page
  { path: '', component: HomeComponent },
  { path: 'home', component:  HomeComponent},
  { path: 'courses', component:  CoursesComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'signup', component:  SignUpComponent},
  { path: 'student-dashboard', component:  StudentDashboardComponent},
  { path: 'admin-dashboard', component:  AdminDashboardComponent},
  { path: 'teacher-dashboard', component:  TeacherDashboardComponent},
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
    SignUpComponent,
    StudentDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ MessageService, CourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
