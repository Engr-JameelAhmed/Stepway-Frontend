import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../Model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  AllCourses: Course[];
  constructor(private course: CourseService){}


    ngOnInit(){

      this.course.getAllcourses().subscribe((data: Course[]) => {
        this.AllCourses = data;

      })

      };





}
