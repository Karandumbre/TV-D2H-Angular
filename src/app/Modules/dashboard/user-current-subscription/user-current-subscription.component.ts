import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../Common/Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-current-subscription',
  templateUrl: './user-current-subscription.component.html',
  styleUrls: ['./user-current-subscription.component.scss']
})
export class UserCurrentSubscriptionComponent implements OnInit {
  public userData = {
    Channels: [],
    Packs: [],
    Services: []
  };

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUserDetails(this.activatedRoute.snapshot.params.id).subscribe(res => {
      this.userService.currentUser = res;
      this.getUserSubscribedDTHData('Packs');
      this.getUserSubscribedDTHData('Channels');
      this.getUserSubscribedDTHData('Services');
    });

  }

  getUserSubscribedDTHData(args) {
    this.userService.currentUser.CurrentSubscription[args].forEach(element => {
      this.userService.getDthService(`${args}/${element}`).subscribe(res => {
        this.userData[args].push(res);
      });
    });
  }
}
