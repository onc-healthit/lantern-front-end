import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrafanaVisComponent } from './components/grafana-vis/grafana-vis.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { UIShellModule, TilesModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';

@NgModule({
  declarations: [
    AppComponent,
    GrafanaVisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      disableConsoleLogging: false,
      level: environment.logLevel,
      enableSourceMaps: environment.enableSourceMaps,
      // @TODO: Server-side logging is not set up yet.
      // serverLoggingUrl: `${environment.apiUrl}`,
      // serverLogLevel: environment.serverLogLevel
    }),
    UIShellModule,
    Notification20Module,
    UserAvatar20Module,
    AppSwitcher20Module,
    TilesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
