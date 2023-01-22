import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class AppHeaderComponent {
  get cartCount() { return JSON.parse(localStorage.getItem('cartCount') || '0')}

}
