import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private route: ActivatedRoute,
    private serversService: ServersService,
    private router: Router
  ) {}

  ngOnInit() {
    //covert string type of id to number using + operator
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

  onEdit() {
    console.log('onEdit is called!');
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
