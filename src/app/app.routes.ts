import { Routes } from '@angular/router';
import{Course} from './course/course'
import{Main} from './main/main'
import{Home} from './home/home'

export const routes: Routes = [{path:"", component: Home},
                                {path: "course",component:Course},
                                {path:"home", component: Home}]
                                // {path:"", component: Home} ];

