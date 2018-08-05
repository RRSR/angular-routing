import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ComponentCanDeactivate} from './user-edit.gaurd';

@Component({
  selector: 'app-user-edit',
  template: `
    <h2>User Edit</h2>
    <button (click)="clicked = true">Click me first!</button>
    <button (click)="onNavigate()">Go Home</button>
  `,
  styles: []
})
export class UserEditComponent implements ComponentCanDeactivate {

  clicked = false;

  constructor(private router: Router) {
  }

  onNavigate() {
    this.router.navigate(['/']);
  }

  canDeactivate() {
    if (!this.clicked) {
      return confirm('Are you sure?');
    }
    return true;
  }
}
