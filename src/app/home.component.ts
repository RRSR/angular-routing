import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home Component</h1>
    <hr>
    Query Param : {{param}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {


  private subscription: Subscription;
  param: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
