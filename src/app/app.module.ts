import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ApiServiceComponent } from './components/lessons/lesson4/services/api-service/api-service.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Lesson1Component } from './components/lessons/lesson1/lesson1.component';
import { Assignment1Component } from './components/assignments/assignment1/assignment1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Lesson2Component } from './components/lessons/lesson2/lesson2.component';
import { Assignment2Component } from './components/assignments/assignment2/assignment2.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { Lesson3Component } from './components/lessons/lesson3/lesson3.component';
import { HelloComponent } from './components/lessons/lesson3/hello/hello.component';
import { BtnComponent } from './components/lessons/lesson3/btn/btn.component';
import { ExampleDirective } from './components/lessons/lesson2/customdirectives/example.directive';
import { Example2Directive } from './components/lessons/lesson2/customdirectives/example2.directive';
import { Example3Directive } from './components/lessons/lesson2/customdirectives/example3.directive';
import { CustomdirectivesComponent } from './components/lessons/lesson2/customdirectives/customdirectives.component';
import { Lesson4Component } from './components/lessons/lesson4/lesson4.component';
import { DataServiceComponent } from './components/lessons/lesson4/services/data-service/data-service.component';
import { LoggingServiceComponent } from './components/lessons/lesson4/services/logging-service/logging-service.component';
import { Lesson5Component } from './components/lessons/lesson5/lesson5.component';
import { SubjectExampleComponent } from './components/lessons/lesson5/subject-example/subject-example.component';
import { MessageServiceComponent } from './components/lessons/lesson4/services/message-service/message-service.component';
import { SenderComponent } from './components/lessons/lesson4/services/message-service/sender/sender.component';
import { ReceiverComponent } from './components/lessons/lesson4/services/message-service/receiver/receiver.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ApiServiceComponent,
    SidebarComponent,
    Assignment1Component,
    Lesson1Component,
    Lesson2Component,
    Assignment2Component,
    PlaygroundComponent,
    Lesson3Component,
    HelloComponent,
    BtnComponent,
    ExampleDirective,
    Example2Directive,
    Example3Directive,
    CustomdirectivesComponent,
    LoggingServiceComponent,
    Lesson4Component,
    DataServiceComponent,
    Lesson5Component,
    SubjectExampleComponent,
    MessageServiceComponent,
    SenderComponent,
    ReceiverComponent
   
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
