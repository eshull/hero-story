import { AngularTouchOfHeroesPage } from './app.po';

describe('angular-touch-of-heroes App', () => {
  let page: AngularTouchOfHeroesPage;

  beforeEach(() => {
    page = new AngularTouchOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
