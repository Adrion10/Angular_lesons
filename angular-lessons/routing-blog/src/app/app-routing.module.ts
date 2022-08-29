import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
  },
  {
    component: UserComponent,
    path: 'user/:id',
  },

  {
    component: HomeComponent,
    path: '',
  },
  {
    component: NoPageComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
