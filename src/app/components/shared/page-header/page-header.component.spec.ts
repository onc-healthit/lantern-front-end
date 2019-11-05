import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu20Module } from '@carbon/icons-angular/lib/menu/20';
import { HeaderModule } from 'carbon-components-angular';
import { LogoGithub20Module } from '@carbon/icons-angular/lib/logo--github/20';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderModule,
        LogoGithub20Module,
        Menu20Module,
      ],
      declarations: [ PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
