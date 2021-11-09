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
import { LoggingServiceComponent } from './components/lessons/lesson4/services/logging-service/logging-service.component';
import { DataServiceComponent } from './components/lessons/lesson4/services/data-service/data-service.component';
import { ApiServiceComponent } from './components/lessons/lesson4/services/api-service/api-service.component';
import { Lesson5Component } from './components/lessons/lesson5/lesson5.component';
import { MessageServiceComponent } from './components/lessons/lesson4/services/message-service/message-service.component';
import { FormsComponent } from './components/lessons/lesson6/forms.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: '', component: Lesson1Component },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'customdirectives', component: CustomdirectivesComponent },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'playground', component: PlaygroundComponent},
  { path: 'about', component: AboutComponent },
  { path: 'apiservice', component: ApiServiceComponent },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'loggingservice', component: LoggingServiceComponent },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'dataservice', component: DataServiceComponent },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'messageservice', component: MessageServiceComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'auth', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
