import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../Common/Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.scss']
})
export class UpdateUserProfileComponent implements OnInit {

  private UpdateUserForm: FormGroup;
  public FirstName: FormControl;
  public LastName: FormControl;
  public Email: FormControl;
  public Phone: FormControl;
  public Status: FormControl;
  public showUpdateTemplate = false;
  constructor(public userService: UserService, protected router: Router,
    private fb: FormBuilder, private activatedRoutes: ActivatedRoute,
    private _location: Location) { }

  ngOnInit() {
    this.userService.getUserDetails(this.activatedRoutes.snapshot.params.id).subscribe(res => {
      this.createFormControls(res);
      this.createForm();
      this.showUpdateTemplate = true;
    });
  }

  createFormControls(data = this.userService.currentUser) {
    this.FirstName = new FormControl(data.FirstName, [Validators.required, Validators.pattern('[a-zA-z ]+')]);
    this.LastName = new FormControl(data.LastName, [Validators.required, Validators.pattern('[a-zA-z ]+')]);
    this.Email = new FormControl(data.Email, [Validators.required, Validators.pattern('[A-Za-z0-9]{3,}(?!.*([._%+-])\\1)([a-zA-Z0-9._%+-]*[a-zA-Z0-9])@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]);
    this.Phone = new FormControl(data.Phone, [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]);
  }

  createForm() {
    this.UpdateUserForm = this.fb.group({
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Phone: this.Phone,
      Status: this.Status
    });
  }

  onSubmit() {
    if (this.UpdateUserForm.valid) {
      const data = {
        ...this.userService.currentUser,
        Email: this.Email.value,
        FirstName: this.FirstName.value,
        LastName: this.LastName.value,
        Phone: this.Phone.value,
      };

      this.userService.UpdateUserDetails(data).subscribe((res) => {
        this.resetForm('Updated');
      });
    }

  }



  resetForm(args) {
    this.userService.refreshData();
    alert(`User ${args} successfully`);
  }

  navigateBack() {
    this._location.back();
  }
}
