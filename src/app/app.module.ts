import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user/user-edit.component';
import {HomeComponent} from './home.component';
import {routing} from './app.routing';
import {UserDetailGaurd} from './user/user-detail.gaurd';
import {UserEditGaurd} from './user/user-edit.gaurd';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [UserDetailGaurd, UserEditGaurd],
  bootstrap: [AppComponent]
})
export class AppModule {
}
