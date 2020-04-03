import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundMessageComponent } from './page-not-found-message.component';

describe('PageNotFoundMessageComponent', () => {
  let component: PageNotFoundMessageComponent;
  let fixture: ComponentFixture<PageNotFoundMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
