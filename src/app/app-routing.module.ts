import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDelComponent } from './components/user-del/user-del.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path:'users',component:UserListComponent},
  {path:'edit/:id',component:UserEditComponent},
  {path:'del/:id',component:UserDelComponent},
  {path:'add',component:UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
