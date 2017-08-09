import { HelloAngular2InGitPage } from './app.po';

describe('hello-angular2-in-git App', () => {
  let page: HelloAngular2InGitPage;

  beforeEach(() => {
    page = new HelloAngular2InGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
