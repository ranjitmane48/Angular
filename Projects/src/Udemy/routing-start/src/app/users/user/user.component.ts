import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };

    this.user = {
      id: this.route.snapshot['id'],
      name: this.route.snapshot['name'],
    };

    this.route.params.subscribe((param: Params) => {
      this.user.id = param['id'];
      this.user.name = param['name'];
    });

    // this.route.params.subscribe((params: Params) => {
    //   this.user.id = params['id'];
    //   this.user.name = params['name'];
    // });
  }
}
