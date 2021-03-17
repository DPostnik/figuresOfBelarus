import {NgModule} from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutUserComponent } from './shared/components/main-layout-user/main-layout-user.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthUserService} from './shared/services/auth.user.service';

@NgModule(
  {
    imports: [
      CommonModule,
      RouterModule.forChild([
      {
        path: '', component: MainLayoutUserComponent, children: [
          { path:'',redirectTo:'/user/login', pathMatch: 'full'  },
          { path:'login', component: LoginComponent  },
          { path:'registration', component: RegistrationComponent },
        ]
      }
    ]),
      ReactiveFormsModule,
      FormsModule,
    ],
    declarations: [RegistrationComponent, LoginComponent, MainLayoutUserComponent],
    exports: [RouterModule],
    providers: [AuthUserService]
  }
)
export class UserModule
{

}
