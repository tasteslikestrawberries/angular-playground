import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class ServicesComponent {}
