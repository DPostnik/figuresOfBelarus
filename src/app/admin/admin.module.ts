import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { CreateFigurePageComponent } from './create-figure-page/create-figure-page.component';
import {CommonModule} from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditFigurePageComponent } from './edit-figure-page/edit-figure-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from './shared/services/auth.guard';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    EditFigurePageComponent,
    DashboardComponent,
    CreateFigurePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'add', component: CreateFigurePageComponent, canActivate: [AuthGuard]},
          {path: 'edit/:id', component: EditFigurePageComponent, canActivate: [AuthGuard]},
          {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
        ]
      }
    ]),
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})

export class AdminModule {

}
