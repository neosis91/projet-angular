import { ProjetAngularPage } from './app.po';

describe('projet-angular App', () => {
  let page: ProjetAngularPage;

  beforeEach(() => {
    page = new ProjetAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
