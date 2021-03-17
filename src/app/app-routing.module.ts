import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {   path: '', redirectTo: '/', pathMatch: 'full'  },
      {   path: '', component: HomePageComponent   },
    ]
  },
  {
    path: 'admin', loadChildren: () => import('src/app/admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'figure', loadChildren: () => import('src/app/figure-page/figure/figure.module')
      .then(m => m.FigureModule)
  },
  {
    path: 'user', loadChildren: () => import('src/app/user/user.module')
      .then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
