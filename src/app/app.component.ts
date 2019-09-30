import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'lantern-app';
  // tslint:disable-next-line:max-line-length
  url1 = 'http://ec2-3-228-127-99.compute-1.amazonaws.com/d-solo/9iJUikcZz/lantern?orgId=1&refresh=30s&from=1569854061884&to=1569854361884&panelId=2';
}
