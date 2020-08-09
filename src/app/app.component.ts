import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "What's upppp!!!!";
  openSideNav = false;

  @ViewChild('sidenav')
  sidenav: MatSidenav
  onToggle() {
    this.sidenav.toggle(true)
  }

  onClose() {
    this.sidenav.toggle(false)
  }
}
