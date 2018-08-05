import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Component</h1>
    <button (click)="onNavigate()">Go Home</button>
    <hr>
    Path Variable : {{id}}
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UserComponent implements OnDestroy {

  private subscription: Subscription;
  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  onNavigate() {
    this.router.navigate([''], {queryParams: {'analytics': 100}});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
