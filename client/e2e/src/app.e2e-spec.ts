import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a Navbar Title', () => {
    page.navigateTo();
    expect(page.getTitleNav()).toEqual('My Store');
  });
  it('should display a list of pokemon', () => {
    page.navigateTo();
    expect(page.getProductElements().count()).toBe(10);
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
