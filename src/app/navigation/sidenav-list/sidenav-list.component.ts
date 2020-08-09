import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>()

  isAuth: Boolean
  authSubscription: Subscription
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus

    })
  }

  onLogout() {
    this.authService.logout()
    this.onClose()
  }

  onClose() {
    this.closeSidenav.emit()
  }

}
