import { Component } from '@angular/core';
import { Example3Directive } from './example-directives/example3.directive';
import { Example2Directive } from './example-directives/example2.directive';
import { ExampleDirective } from './example-directives/example.directive';

@Component({
    selector: 'app-custom-directives',
    templateUrl: './custom-directives.component.html',
    styleUrls: ['./custom-directives.component.scss'],
    standalone: true,
    imports: [
        ExampleDirective,
        Example2Directive,
        Example3Directive,
    ],
})
export class CustomDirectivesComponent {
  punchline = 'Do or do not. There is no try.';
}
