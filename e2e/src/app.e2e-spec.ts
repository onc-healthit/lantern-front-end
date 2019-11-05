import { AppPage } from './app.po';
import { browser, logging, $, by, element, $$ } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Lantern', () => {
    page.navigateTo();
    const header = $('.bx--header__name');
    expect(header.getText()).toEqual('Lantern');
  });

  it('the default page is the Home page', () => {
    page.navigateTo();
    const homeBody = $$('.home-body h5').first();
    expect(homeBody.getText()).toEqual('Endpoint Metrics');
  });

  it('should navigate to Endpoint page', () => {
    element(by.className('endpoint-link')).click();
    const subheader = $('.sub-header').$('h1');
    expect(subheader.getText()).toEqual('FHIR Endpoints');
  });

  it('should navigate to About page', () => {
    element(by.className('about-link')).click();
    const subheader = $('.sub-header').$('h1');
    expect(subheader.getText()).toEqual('About Lantern');
  });

  it('should navigate to Home page', () => {
    element(by.className('bx--header__name')).click();
    const homeBody = $$('.home-body h5').first();
    expect(homeBody.getText()).toEqual('Endpoint Metrics');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
