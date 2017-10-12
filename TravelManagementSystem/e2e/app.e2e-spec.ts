import { TravelManagementSystemPage } from './app.po';

describe('travel-management-system App', () => {
  let page: TravelManagementSystemPage;

  beforeEach(() => {
    page = new TravelManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
