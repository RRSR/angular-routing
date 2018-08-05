import {Routes} from '@angular/router';
import {UserDetailComponent} from './user-detail.component';
import {UserEditComponent} from './user-edit.component';
import {UserDetailGaurd} from './user-detail.gaurd';
import {UserEditGaurd} from './user-edit.gaurd';

export const USER_ROUTES: Routes = [
  {path: 'detail', component: UserDetailComponent, canActivate: [UserDetailGaurd]},
  {path: 'edit', component: UserEditComponent, canDeactivate: [UserEditGaurd]}
];
