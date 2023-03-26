import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  parameterSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //this will work at the time of initialization only.
    //the user information will not change once the component is already loaded and user changes the value using route parameters
    this.user = {
      id: this.route.snapshot['id'],
      name: this.route.snapshot['name'],
    };

    //subscribe the params observable to get latest updated values whenever the value changes
    this.route.params.subscribe((param: Params) => {
      this.user.id = param['id'];
      this.user.name = param['name'];
    });
  }

  //unsubscribe the event
  ngOnDestroy(): void {
    this.parameterSubscription.unsubscribe();
  }
}
