import { 
  Component, 
  ElementRef, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-register',
  templateUrl: './server-register.component.html',
  styleUrls: ['./server-register.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerRegisterComponent {
  
  title = 'app-hello-world'; 

  @ViewChild('serverContentInput')
  serverContentInput : ElementRef | undefined;

  @Output()
  serverCreated = 
  new EventEmitter<{type: string, serverName: string, serverContent: string}>();
  
  @Output()
  bluePrintCreated = 
  new EventEmitter<{type: string, serverName: string, serverContent: string}>();

  onAddServer(nameInput: HTMLInputElement) : any {
    this.serverCreated.emit({
      type: 'server', 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput?.nativeElement.value
    });  
  }

  onAddBluePrint(nameInput: HTMLInputElement) : any {
    this.bluePrintCreated.emit({
      type: 'server', 
      serverName: nameInput.value, 
      serverContent: this.serverContentInput?.nativeElement.value
    });
  }
}
