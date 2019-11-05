import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public dashboardURL = 'http://ec2-3-228-127-99.compute-1.amazonaws.com/d-solo/ZEcnMHoWk/lantern?orgId=1&refresh=10s&theme=light';

  public totalEndpoints = this.dashboardURL + '&panelId=14';
  public success = this.dashboardURL + '&panelId=12';
  public unsuccessful = this.dashboardURL + '&panelId=16';
  public unresponsive = this.dashboardURL + '&panelId=18';
  public newEndpoints = this.dashboardURL + '&panelId=20';
  public responseTimeRange = this.dashboardURL + '&panelId=22';
  public currentResponseTime = this.dashboardURL + '&panelId=8';

  constructor() { }

  ngOnInit() {
  }

}
