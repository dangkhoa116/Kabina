import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './kabina/components/user-list/user-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user-list' },
  { path: 'user-list', component: UserListComponent },
  { path: "**",component: UserListComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
