import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User, User1} from '../../shared/interfaces';
import {AuthUserService} from '../shared/services/auth.user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private userService: AuthUserService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
        {
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
          firstName: new FormControl(null,[Validators.required]),
          lastname: new FormControl(null, [Validators.required])
        },

    )
  }

  submit() {
    if(this.form.invalid)
    {
      return
    }

    this.submitted = true;
    const user: User =
      {
        username: this.form.value.email,
        password: this.form.value.password,
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName
      }

      this.userService.create(user)
        .subscribe(
          (resp) =>
          {
            this.submitted = false;
            console.log(resp);
          }
        )

  }
}
