import {RouterModule} from '@angular/router';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home.component';
import {USER_ROUTES} from './user/user.routing';

const APP_ROUTES = [
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id', component: UserComponent, children: USER_ROUTES},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/user/1', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);

