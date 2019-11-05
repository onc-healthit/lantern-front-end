import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointPageComponent } from './endpoint-page.component';
import { PageSubHeaderComponent } from 'src/app/components/shared/page-sub-header/page-sub-header.component';

describe('EndpointPageComponent', () => {
  let component: EndpointPageComponent;
  let fixture: ComponentFixture<EndpointPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointPageComponent, PageSubHeaderComponent ]
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
