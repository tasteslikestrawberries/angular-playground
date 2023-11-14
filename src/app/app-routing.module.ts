import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DataBindingComponent } from './components/basics/data-binding/data-binding.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { ParentComponent } from './components/basics/sharing-data/parent.component';
import { CustomDirectivesComponent } from './components/basics/custom-directives/custom-directives.component';
import { ServicesComponent } from './components/basics/services/services.component';
import { LoggingServiceComponent } from './shared/services/logging-service/logging-service.component';
import { DataServiceComponent } from './shared/services/data-service/data-service.component';
import { FormsComponent } from './components/basics/forms/forms.component';
import { AuthComponent } from './components/auth/auth.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AuthGuard } from './components/auth/auth.guard';
import { TaskServiceComponent } from './shared/services/task-service/task-service.component';
import { DynamicHeaderComponent } from './components/dynamic-header/dynamic-header.component';
import { ZodTestComponent } from './components/zod-test/zod-test.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ControlValueAccessorComponent } from './components/control-value-accessor/control-value-accessor.component';
import { ViewContainerRefComponent } from './components/view-container-ref/view-container-ref.component';
import { LazyLoadingComponent } from './components/lazy-loading/lazy-loading.component';

const routes: Routes = [
  { path: '', component: DataBindingComponent },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sharing-data', component: ParentComponent },
  { path: 'loggingservice', component: LoggingServiceComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'dataservice', component: DataServiceComponent },
  { path: 'taskservice', component: TaskServiceComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'view-container-ref', component: ViewContainerRefComponent },
  { path: 'dynamic-header', component: DynamicHeaderComponent },
  { path: 'zod-test', component: ZodTestComponent },
  { path: 'controlvalueaccessor', component: ControlValueAccessorComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'lazy-loading', component: LazyLoadingComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
