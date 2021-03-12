import { Component } from '@angular/core';

//Component, Html in datasını yönettiğimiz yer.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Onur Budak';
 
}
