import { Component } from '@angular/core';
import { AllCommunityModule,ModuleRegistry} from 'ag-grid-community'
ModuleRegistry.registerModules([AllCommunityModule])
import {AgGridAngular} from 'ag-grid-angular'
import type {ColDef,Theme} from 'ag-grid-community'

import {themeQuartz} from "ag-grid-community";
@Component({
  selector: 'course',
  imports: [AgGridAngular],
  templateUrl: './course.html',
  styleUrl: './course.css'
})
export class Course {

  theme:Theme = themeQuartz.withParams({ accentColor: 'red' });
    courses = [
      {name: "introduction to programming", difficulty: "Beginners", language: "En", rate:"7.8/10"},
      {name: "introduction to Algorithims", difficulty: "Beginners", language: "En", rate:"7/10"},
      {name: "introduction to Database", difficulty: "Beginners", language: "En", rate:"8/10"},
      {name: "Database administration", difficulty: "Intermediates", language: "En", rate:"8.4/10"}
    ];
    colDefs: ColDef[] = [
      {field: "name"},
      {field: "difficulty"},
      {field: "language"},
      {field: "rate"}
    ];
    defaultColDef: ColDef = {
      flex: 1,
      filter: true,
    };
}
