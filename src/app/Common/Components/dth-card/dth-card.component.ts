import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './../../Services/user.service';

@Component({
  selector: 'app-dth-card',
  templateUrl: './dth-card.component.html',
  styleUrls: ['./dth-card.component.scss']
})
export class DthCardComponent implements OnInit {
  @Input() data: any;
  @Input() type = 'Packs';
  @Input() hideSubscribeButton = false;
  @Input() drawerId = 'default';
  @Output() serviceSubcription: EventEmitter<object> = new EventEmitter();
  @ViewChild('closeModal', { static: false }) closeModal: ElementRef<HTMLButtonElement>;
  public months = 1;
  public totalPrice = 0;
  public openModal = true;
  public discountedPrice = 0;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.discountedPrice = this.totalPrice = this.data.price;
  }

  subcribe() {
    if (this.userService.currentUser.Balance >= this.discountedPrice) {
      this.serviceSubcription.emit({ id: this.data.id, serviceName: this.type, name: this.data.name, price: this.data.price });
      this.closeModal.nativeElement.click();
    } else {
      alert(`You don't have sufficient balance in your wallet, Please recharge`);
    }
  }

  checkSubscription() {
    if (this.userService.currentUser.CurrentSubscription[this.type].includes(this.data.id)) {
      this.openModal = false;
      alert(`You are already subscribed to ${this.data.name}`);
      return;
    }
    this.openModal = true;
  }

  add() {
    this.months += 1;
    this.totalPrice += this.data.price;
    this.calculateDiscount();
  }

  calculateDiscount() {
    this.discountedPrice = this.totalPrice;
    if (this.months > 2) {
      this.discountedPrice = this.totalPrice - (this.totalPrice * 0.1);
    }
    return;
  }

  subtract() {
    if (this.months > 1) {
      this.months -= 1;
      this.totalPrice -= this.data.price;
      this.calculateDiscount();
    } else {
      alert('Please subscribe the service for aleast 1 month');
    }
  }
}
