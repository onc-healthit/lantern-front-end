import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UIShellModule, TilesModule } from 'carbon-components-angular';
import { LogoGithub20Module } from '@carbon/icons-angular/lib/logo--github/20';
import { Menu20Module } from '@carbon/icons-angular/lib/menu/20';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { AppComponent } from './app.component';
import { GrafanaVisComponent } from './components/shared/grafana-vis/grafana-vis.component';
import { PageFooterComponent } from './components/shared/page-footer/page-footer.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { PageSubHeaderComponent } from './components/shared/page-sub-header/page-sub-header.component';
import { ItemNotFoundMessageComponent } from './components/shared/item-not-found-message/item-not-found-message.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LoggerTestingModule,
        LogoGithub20Module,
        Menu20Module,
        UIShellModule,
        TilesModule
      ],
      declarations: [
        AppComponent,
        GrafanaVisComponent,
        PageFooterComponent,
        PageHeaderComponent,
        PageSubHeaderComponent,
        ItemNotFoundMessageComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lantern-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lantern-app');
  });

  it('should render page header', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    const pageHeaderComp = fixture.debugElement.componentInstance;
    expect(pageHeaderComp).toBeTruthy();
  });

  it('should render page footer', () => {
    const fixture = TestBed.createComponent(PageFooterComponent);
    const pageFooterComp = fixture.debugElement.componentInstance;
    expect(pageFooterComp).toBeTruthy();
  });
});
