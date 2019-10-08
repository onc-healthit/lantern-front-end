import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { GrafanaVisComponent } from './grafana-vis.component';

describe('GrafanaVisComponent', () => {
  let component: GrafanaVisComponent;
  let fixture: ComponentFixture<GrafanaVisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LoggerTestingModule
      ],
      declarations: [ GrafanaVisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafanaVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
