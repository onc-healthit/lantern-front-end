import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNotFoundMessageComponent } from './item-not-found-message.component';

describe('ItemNotFoundMessageComponent', () => {
  let component: ItemNotFoundMessageComponent;
  let fixture: ComponentFixture<ItemNotFoundMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNotFoundMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNotFoundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
