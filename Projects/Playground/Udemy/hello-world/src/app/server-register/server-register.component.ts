import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-register',
  templateUrl: './server-register.component.html',
  styleUrls: ['./server-register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerRegisterComponent {
  title = 'app-hello-world'; 
  newServerContent = '';

  @Output()
  serverCreated = new EventEmitter<{type: string, serverName: string, serverContent: string}>();
  @Output()
  bluePrintCreated = new EventEmitter<{type: string, serverName: string, serverContent: string}>();

  onAddServer(nameInput: HTMLInputElement) : any {
    console.log(nameInput.value);
    this.serverCreated.emit({
      type: 'server', 
      serverName: nameInput.value, 
      serverContent: this.newServerContent
    });  
  }

  onAddBluePrint(nameInput: HTMLInputElement) : any {
    this.bluePrintCreated.emit({
      type: 'server', 
      serverName: nameInput.value, 
      serverContent: this.newServerContent
    });
  }
}
