import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './components/service/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { UserDelComponent } from './components/user-del/user-del.component';
import { UserAddComponent } from './components/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    UserDelComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//
    FormsModule,//
    AppRoutingModule
  ],
  providers: [UserService], //
  bootstrap: [AppComponent]
})
export class AppModule { }
