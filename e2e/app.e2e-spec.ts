import { AngularSabado2Page } from './app.po';

describe('angular-sabado-2 App', function() {
  let page: AngularSabado2Page;

  beforeEach(() => {
    page = new AngularSabado2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
