import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User1} from '../../shared/interfaces';
import {AuthUserService} from '../shared/services/auth.user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  constructor(
    private userService: AuthUserService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl(null,[
          Validators.required, Validators.email
          ]
        ),
        password: new FormControl(null, [
          Validators.required, Validators.minLength(6)
        ])
      }
    )
  }

  submit() {
    if(this.form.invalid)
    {
      return
    }
    this.submitted = true;
    const user: User1 = {
      password: this.form.value.password,
      username: this.form.value.email
    }

    this.userService.login(user)
      .subscribe(
        () =>
        {
          this.submitted = false;
          console.log("log in");
        }
      )

  }
}
