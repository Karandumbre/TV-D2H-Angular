import { Component, OnInit } from '@angular/core';
import { UserService } from './Common/Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TechVerito D2H';
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.FetchUserData();
    this.userService.refresh.subscribe(res => {
      if (res === 'refresh') {
        this.FetchUserData();
      }
    });
  }

  FetchUserData() {
    this.userService.getUserDetails('TV_USER_1').subscribe(res => {
      this.userService.currentUser = res;
    });
  }
}



