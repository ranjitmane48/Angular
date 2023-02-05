import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-unit',
  templateUrl: './server-unit.component.html',
  styleUrls: ['./server-unit.component.css']
})
export class ServerUnitComponent implements OnInit{
  @Input('customServerUnit')
  serverUnit : { type: string; name: string; content: string; } | undefined;

  constructor() {

  }

  ngOnInit(): void {

  }

}
