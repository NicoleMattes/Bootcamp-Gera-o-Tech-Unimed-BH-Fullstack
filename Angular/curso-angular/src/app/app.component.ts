import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {
    email: 'joaquim@gmail.com',
    role: 'Admin',
  }

  userName = 'Joaquim';

  title = 'curso-angular';
}
