import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './components/playground/playground.component';
import { AboutComponent } from './components/about/about.component';
import { ApiComponent } from './services/api-service/api/api.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';

const routes: Routes = [
  { path: '', component: PlaygroundComponent },
  { path: 'about', component: AboutComponent },
  { path: 'api', component: ApiComponent },
  { path: 'assignments', component: AssignmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
