import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../Common/Services/user.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  recharge(event) {
    const money = parseInt(event.value, 10);
    if (money) {
      const newBalance = this.userService.currentUser.Balance + money;
      this.userService.recharge(this.userService.currentUser.id, newBalance).subscribe(res => {
        this.userService.refreshData();
        event.value = '';
        alert('Money Added to wallet');
      });
    } else {
      alert('Enter Valid Amount between 10 to 9999');
    }

  }

  validateInput(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

}
