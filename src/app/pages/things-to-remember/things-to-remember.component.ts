import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-things-to-remember',
  templateUrl: './things-to-remember.component.html',
  styleUrls: ['./things-to-remember.component.css']
})
export class ThingsToRememberComponent {
  constructor(public auth: AuthService) {}
}
