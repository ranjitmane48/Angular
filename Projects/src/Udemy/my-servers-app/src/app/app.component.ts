import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  serverName = '';
  serverContent = '';
  serverUnits = [{type: 'server', name: 'TestServer', content: 'Test'}];

  addNewServer() {
    console.log("add new server is called");
    this.serverUnits.push({
      type: 'new-server',
      name: this.serverName,
      content: this.serverContent
    });
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverUnits.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
    console.log(`on server added is called.`);
    console.log(`Server name: ${serverData.serverName}, server content : ${serverData.serverContent}`);
  }

  onBluePrintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    this.serverUnits.push({
      type: 'server',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
    console.log("on server added is called");
  }
}
