import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Common/Services/user.service';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.scss']
})
export class DTHComponent implements OnInit {
  public dth = {
    channels: [],
    packs: [],
    services: []
  };

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  fetchDTHServices(name) {
    this.userService.fetchDTHData(name).subscribe(res => {
      switch (name) {
        case 'Channels':
          this.dth.channels = res;
          break;
        case 'Services':
          this.dth.services = res;
          break;
        case 'Packs':
          this.dth.packs = res;
          break;
      }
    });
  }

  subcribeToService(event) {
    const user = { ...this.userService.currentUser };
    user.Balance = user.Balance - event.price;
    event.serviceName === 'Packs' ? user.CurrentSubscription[event.serviceName] = [event.id]
      : user.CurrentSubscription[event.serviceName].push(event.id);
    this.userService.UpdateUserDetails(user).subscribe(res => {
      this.userService.refreshData();
      alert('You successfully Subscribed to the service');
    });
  }
}

