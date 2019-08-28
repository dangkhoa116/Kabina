import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KabinaComponent } from './kabina/kabina.component';
import { UserListComponent } from './kabina/components/user-list/user-list.component';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './kabina/components/user/user.component';
import { FormsModule } from "@angular/forms";
import { UserListService } from './kabina/services/user-list.service';
@NgModule({
  declarations: [
    AppComponent,
    KabinaComponent,
    UserListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
