import { Component } from '@angular/core';
interface Menu {
  title: string;
  url: string;
  span: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menuActive = false;

  public menu: Menu[] = [
    { title: 'Home', url: '/home', span: '00' },
    { title: 'Destination', url: '/destination', span: '01' },
    { title: 'Crew', url: '/crew', span: '02' },
    { title: 'Technology', url: '/technology', span: '03' }
  ]

  toogleMenu() {
    this.menuActive = !this.menuActive;
  }
}
