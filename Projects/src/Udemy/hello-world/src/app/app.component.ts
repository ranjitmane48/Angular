import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverElements = [{type: 'sample-server-1-type', name: 'sample-server-1-name', content: 'sample-server-1-content'}];

  title = 'app-hello-world'; 
  newServerName = "Sample Server Name";
  newServerContent = "Sample Server Content";

  onServerAdded(serverData : any) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintAdded(bluePrintData: any) {
    this.serverElements.push({
      type: 'server',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
    console.log("app.component.ts -> onBluePrintAdded method is called");
  }
}
