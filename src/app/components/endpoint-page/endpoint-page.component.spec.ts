import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointPageComponent } from './endpoint-page.component';

describe('EndpointPageComponent', () => {
  let component: EndpointPageComponent;
  let fixture: ComponentFixture<EndpointPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
