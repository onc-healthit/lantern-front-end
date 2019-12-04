import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public dashboardURL: string;
  public totalEndpoints = '&panelId=2';
  public success = '&panelId=6';
  public unsuccessful = '&panelId=8';
  public unresponsive = '&panelId=10';
  public responseTimeRange = '&panelId=14';
  public currentResponseTime = '&panelId=18';
  // @TODO: Add visualization for New Endpionts

  constructor(private configService: ConfigService) {
    this.dashboardURL = this.configService.getConfig().grafana_url;
  }

  ngOnInit() {
  }

  public getUrl(panel: string) {
    return this.dashboardURL + panel;
  }

}
