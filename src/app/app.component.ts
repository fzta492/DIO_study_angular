import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bestCar = "toyota";
  title = 'inicio';
  users = { email: 'joaquim@joaquim.com' , role: 'admin', };
}
