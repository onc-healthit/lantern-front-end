import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-grafana-vis',
  templateUrl: './grafana-vis.component.html',
  styleUrls: ['./grafana-vis.component.sass']
})
export class GrafanaVisComponent implements OnInit {

  @Input() inputUrl: string;
  public grafanaUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {   }

  ngOnInit() {
    this.grafanaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputUrl);
  }

}
