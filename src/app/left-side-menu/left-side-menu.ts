import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-left-side-menu',
  imports: [RouterModule],
  templateUrl: './left-side-menu.html',
  styleUrl: './left-side-menu.css'
})
export class LeftSideMenu {
  items = [
    {
      routeLink: 'home',
      icon: 'fal fa-home',
      label: 'Home',
    },
    {
      routeLink: 'course',
      icon: 'fal fa-school',
      label: 'Courses',
    },
    {
      routeLink: 'pages',
      icon: 'fal fa-file-invoice',
      label: 'Pages',
    },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];
}
