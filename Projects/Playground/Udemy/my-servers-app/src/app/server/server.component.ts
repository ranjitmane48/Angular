import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  title = '';
  serverName = '';
  serverContent = '';
  serverElements : any[] = [];

  @Output()
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @Output()
  bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  addNewServer() {
    console.log("add new server is called");
    this.serverElements.push({
      type: 'server',
      name: this.serverName,
      content: this.serverContent
    });

    this.serverCreated.emit({
      serverName : this.serverName,
      serverContent: this.serverContent
    });
  }
}
