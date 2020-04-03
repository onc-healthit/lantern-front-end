import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { GrafanaVisComponent } from './grafana-vis.component';
import { ItemNotFoundMessageComponent } from '../item-not-found-message/item-not-found-message.component';

describe('GrafanaVisComponent', () => {
  let component: GrafanaVisComponent;
  let fixture: ComponentFixture<GrafanaVisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LoggerTestingModule
      ],
      declarations: [ GrafanaVisComponent, ItemNotFoundMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafanaVisComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create iframe with http url', () => {
    component.inputUrl = 'http://dashboard.com';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create iframe with https url', () => {
    component.inputUrl = 'https://dashboard.com';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should not display iframe if url is invalid', () => {
    component.inputUrl = '';
    fixture.detectChanges();
    const homeElement: HTMLElement = fixture.nativeElement;
    const pageNotFoundElements = homeElement.querySelectorAll('.error-class');
    expect(pageNotFoundElements.length).toEqual(1);
  });
});
