import { VehicleServiceManagementSystemPage } from './app.po';

describe('vehicle-service-management-system App', () => {
  let page: VehicleServiceManagementSystemPage;

  beforeEach(() => {
    page = new VehicleServiceManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
