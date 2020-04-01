import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrafanaVisComponent } from './components/shared/grafana-vis/grafana-vis.component';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { UIShellModule, TilesModule, ModalModule, HeaderModule, ButtonModule } from 'carbon-components-angular';
import { Menu20Module } from '@carbon/icons-angular/lib/menu/20';
import { LogoGithub20Module } from '@carbon/icons-angular/lib/logo--github/20';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { PageFooterComponent } from './components/shared/page-footer/page-footer.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { EndpointPageComponent } from './components/endpoint-page/endpoint-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageSubHeaderComponent } from './components/shared/page-sub-header/page-sub-header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    GrafanaVisComponent,
    PageHeaderComponent,
    PageFooterComponent,
    AboutPageComponent,
    EndpointPageComponent,
    HomePageComponent,
    PageSubHeaderComponent,
    PageNotFoundComponent,
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
    ButtonModule,
    HeaderModule,
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
