import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ApiComponent } from './services/api-service/api/api.component';
import { Lesson1Component } from './components/lessons/lesson1/lesson1.component';
import { Assignment1Component } from './components/assignments/assignment1/assignment1.component';
import { Lesson2Component } from './components/lessons/lesson2/lesson2.component';
import { Assignment2Component } from './components/assignments/assignment2/assignment2.component';

const routes: Routes = [
  { path: '', component: Lesson1Component },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'about', component: AboutComponent },
  { path: 'api', component: ApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}