import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrafanaVisComponent } from './components/grafana-vis/grafana-vis.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { UIShellModule, TilesModule, ModalModule } from 'carbon-components-angular';
import { Menu20Module } from '@carbon/icons-angular/lib/menu/20';
import { LogoGithub20Module } from '@carbon/icons-angular/lib/logo--github/20';

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
    TilesModule,
    Menu20Module,
    ModalModule,
    LogoGithub20Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
