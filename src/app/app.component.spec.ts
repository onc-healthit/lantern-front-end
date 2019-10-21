import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GrafanaVisComponent } from './components/grafana-vis/grafana-vis.component';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { UIShellModule, TilesModule } from 'carbon-components-angular';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LoggerTestingModule,
        UIShellModule,
        TilesModule
      ],
      declarations: [
        AppComponent,
        GrafanaVisComponent
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

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.top-tile span').textContent).toContain('lantern is running!');
  });

  it('should render grafana vis', () => {
    const fixture = TestBed.createComponent(GrafanaVisComponent);
    const grafComp = fixture.debugElement.componentInstance;
    expect(grafComp).toBeTruthy();
  });
});
