import { SchemaFormGeneratorPage } from './app.po';

describe('schema-form-generator App', () => {
  let page: SchemaFormGeneratorPage;

  beforeEach(() => {
    page = new SchemaFormGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
