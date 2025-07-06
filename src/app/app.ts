import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Course } from './course/course';
import { CustomerTable } from './customer-table/customer-table';
import { LeftSideMenu } from "./left-side-menu/left-side-menu";
import { Main } from "./main/main";
import { TaskBar } from "./task-bar/task-bar";
@Component({
  selector: 'app-root',
  imports: [Course, CustomerTable, LeftSideMenu, Main, TaskBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular new basic screen';
  course = Course;
  
}
