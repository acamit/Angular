import { RetailInventoryMangaementPage } from './app.po';

describe('retail-inventory-mangaement App', () => {
  let page: RetailInventoryMangaementPage;

  beforeEach(() => {
    page = new RetailInventoryMangaementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
