import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { HomePageComponent } from './home-page.component';
import { GrafanaVisComponent } from 'src/app/components/shared/grafana-vis/grafana-vis.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LoggerTestingModule
      ],
      declarations: [ HomePageComponent, GrafanaVisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('rendering endpoints', () => {
    let iframeElements: NodeListOf<HTMLIFrameElement>;

    beforeEach(() => {
      const homeElement: HTMLElement = fixture.nativeElement;
      iframeElements = homeElement.querySelectorAll('iframe');
    });

    it('should render total endpoint iframe first', () => {
      expect(iframeElements[0].src).toEqual(component.getUrl(component.totalEndpoints));
    });

    it('should render success iframe second', () => {
      expect(iframeElements[1].src).toEqual(component.getUrl(component.success));
    });

    it('should render unsuccessful iframe third', () => {
      expect(iframeElements[2].src).toEqual(component.getUrl(component.unsuccessful));
    });

    it('should render unresponsive iframe fourth', () => {
      expect(iframeElements[3].src).toEqual(component.getUrl(component.unresponsive));
    });

    it('should render response time range iframe fifth', () => {
      expect(iframeElements[4].src).toEqual(component.getUrl(component.responseTimeRange));
    });

    it('should render current response time iframe sixth', () => {
      expect(iframeElements[5].src).toEqual(component.getUrl(component.currentResponseTime));
    });
  });
});
