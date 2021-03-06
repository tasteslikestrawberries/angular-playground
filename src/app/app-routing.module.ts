import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { Lesson1Component } from './components/lessons/lesson1/lesson1.component';
import { Assignment1Component } from './components/assignments/assignment1/assignment1.component';
import { Lesson2Component } from './components/lessons/lesson2/lesson2.component';
import { Assignment2Component } from './components/assignments/assignment2/assignment2.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { Lesson3Component } from './components/lessons/lesson3/lesson3.component';
import { CustomdirectivesComponent } from './components/lessons/lesson2/customdirectives/customdirectives.component';
import { Lesson4Component } from './components/lessons/lesson4/lesson4.component';
import { LoggingServiceComponent } from './services/logging-service/logging-service.component';
import { DataServiceComponent } from './services/data-service/data-service.component';
import { ApiServiceComponent } from './services/api-service/api-service.component';
import { Lesson5Component } from './components/lessons/lesson5/lesson5.component';
import { MessageServiceComponent } from './services/message-service/message-service.component';
import { FormsComponent } from './components/lessons/lesson6/forms.component';
import { AuthComponent } from './components/auth/auth.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { AuthGuard } from './components/auth/auth.guard';
import { TaskServiceComponent } from './services/task-service/task-service.component';
import { DynamicComponentsComponent } from './components/dynamic-components/dynamic-components.component';
import { DynamicHeaderComponent } from './components/dynamic-header/dynamic-header.component';

const routes: Routes = [
  { path: '', component: Lesson1Component },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'customdirectives', component: CustomdirectivesComponent },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'about', component: AboutComponent },
  { path: 'apiservice', component: ApiServiceComponent },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'loggingservice', component: LoggingServiceComponent },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'dataservice', component: DataServiceComponent },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'messageservice', component: MessageServiceComponent },
  { path: 'taskservice', component: TaskServiceComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'myprofile', component: MyprofileComponent, canActivate: [AuthGuard] },
  { path: 'dynamic-components', component: DynamicComponentsComponent },
  { path: 'dynamic-header', component: DynamicHeaderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
