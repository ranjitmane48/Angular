import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  loadedFeature = 'recipes';

  //this method handles the featureSelectedEvent
  onNavigate(eventData: any) {
    this.loadedFeature = eventData;
  }
}
