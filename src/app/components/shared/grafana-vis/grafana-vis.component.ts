import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-grafana-vis',
  templateUrl: './grafana-vis.component.html',
  styleUrls: ['./grafana-vis.component.scss']
})
export class GrafanaVisComponent implements OnInit {

  @Input() inputUrl: string;
  public grafanaUrl: SafeResourceUrl;
  public height = '300';
  public valid = true;

  constructor(private sanitizer: DomSanitizer, private logger: NGXLogger) {   }

  ngOnInit() {
    // If the inputUrl given does not start with http or https, then bypassSecurityTrustResourceUrl returns a url
    // that starts with the server path and uses the inputUrl as a subpath.
    // For example: if the inputUrl was "google.com" and this was running on "http://localhost:4200," then
    // the grafanaUrl would be "http://localhost:4200/google.com"
    this.grafanaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.inputUrl);
    this.valid = this.isInputUrlValid();
    this.logger.info('Created Grafana Visualization from url: ' + this.inputUrl);
  }

  /**
   * This function checks to make sure the given url is valid based on Angular's restrictions.
   */
  isInputUrlValid() {
    if (!this.inputUrl || (this.inputUrl.length < 7)) {
      return false;
    }
    const httpVal = this.inputUrl.substring(0, 7);
    const httpsVal = this.inputUrl.substring(0, 8);
    if ((httpVal === 'http://') || (httpsVal === 'https://')) {
      return true;
    }
    return false;
  }

}
