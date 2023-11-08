import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataBindingComponent } from './components/basics/data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaygroundComponent } from './components/playground/playground.component';
import { ParentComponent } from './components/basics/sharing-data/parent.component';
import { HelloComponent } from './components/basics/sharing-data/children/hello/hello.component';
import { BtnComponent } from './components/basics/sharing-data/children/btn/btn.component';
import { ExampleDirective } from './components/basics/custom-directives/example-directives/example.directive';
import { Example2Directive } from './components/basics/custom-directives/example-directives/example2.directive';
import { Example3Directive } from './components/basics/custom-directives/example-directives/example3.directive';
import { CustomDirectivesComponent } from './components/basics/custom-directives/custom-directives.component';
import { ServicesComponent } from './components/basics/services/services.component';
import { DataServiceComponent } from './shared/services/data-service/data-service.component';
import { LoggingServiceComponent } from './shared/services/logging-service/logging-service.component';
import { ReversePipe } from './shared/custom-pipes/reverse.pipe';
import { SortPipe } from './shared/custom-pipes/sort.pipe';
import { ShortenPipe } from './shared/custom-pipes/shorten.pipe';
import { TemplateApproachComponent } from './components/basics/forms/template-approach/template-approach.component';
import { ReactiveApproachComponent } from './components/basics/forms/reactive-approach/reactive-approach.component';
import { FormsComponent } from './components/basics/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { TaskServiceComponent } from './shared/services/task-service/task-service.component';
import { TaskDetailsComponent } from './shared/services/task-service/task-details/task-details.component';
import { IntersectionObserverComponent } from './components/playground/intersection-observer/intersection-observer.component';
import { ReactiveformNewComponent } from './components/basics/forms/reactive-approach/reactiveform-new/reactiveform-new.component';
import { ViewContainerRefComponent } from './components/view-container-ref/view-container-ref.component';
import { DynamicLoaderDirective } from './shared/directives/dynamic-loader.directive';
import { RedComponent } from './components/view-container-ref/red/red.component';
import { BlueComponent } from './components/view-container-ref/blue/blue.component';
import { GreenComponent } from './components/view-container-ref/green/green.component';
import { DynamicHeaderComponent } from './components/dynamic-header/dynamic-header.component';
import { FirstComponent } from './components/dynamic-header/first/first.component';
import { SecondComponent } from './components/dynamic-header/second/second.component';
import { HeaderReusableComponent } from './components/dynamic-header/header-reusable/header-reusable.component';
//import { TranslocoRootModule } from './transloco-root.module';
import { ZodTestComponent } from './components/zod-test/zod-test.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ControlValueAccessorComponent } from './components/control-value-accessor/control-value-accessor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SidebarComponent,
    DataBindingComponent,
    PlaygroundComponent,
    ParentComponent,
    HelloComponent,
    BtnComponent,
    ExampleDirective,
    Example2Directive,
    Example3Directive,
    CustomDirectivesComponent,
    LoggingServiceComponent,
    ServicesComponent,
    DataServiceComponent,
    ReversePipe,
    SortPipe,
    ShortenPipe,
    TemplateApproachComponent,
    ReactiveApproachComponent,
    FormsComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    MyProfileComponent,
    TaskServiceComponent,
    TaskDetailsComponent,
    IntersectionObserverComponent,
    ReactiveformNewComponent,
    DynamicLoaderDirective,
    RedComponent,
    BlueComponent,
    GreenComponent,
    DynamicHeaderComponent,
    FirstComponent,
    SecondComponent,
    HeaderReusableComponent,
    ZodTestComponent,
    SignalsComponent,
    ControlValueAccessorComponent,
    ViewContainerRefComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
