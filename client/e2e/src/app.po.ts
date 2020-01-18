import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getTitleNav() {
    return element(by.css('app-root .mat-toolbar h1')).getText() as Promise<string>;
  }
  getProductElements() {
    return element.all(by.css('.mat-card'));
  }
}
