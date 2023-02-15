import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-register',
  templateUrl: './server-register.component.html',
  styleUrls: ['./server-register.component.css']
})
export class ServerRegisterComponent {
  title = 'app-hello-world'; 
  newServerName = '';
  newServerContent = '';

  @Output()
  serverCreated = new EventEmitter<{type: string, name: string, serverContent: string}>();
  @Output()
  bluePrintCreated = new EventEmitter<{type: string, name: string, serverContent: string}>();

  onAddServer() : any {
    this.serverCreated.emit({type: 'server', name: this.newServerName, serverContent: this.newServerContent});
    console.log("onAddServer method is called");
  }

  onAddBluePrint() : any {
    this.bluePrintCreated.emit({type: 'server', name: this.newServerName, serverContent: this.newServerContent});
    console.log("onAddBluePrint method is called");
  }
}
