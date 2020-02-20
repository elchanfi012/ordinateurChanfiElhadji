import {browser, element, logging, by} from 'protractor';
import {ComputerPage} from './computer.po';

describe('test des chaussures', () => {
  let page: ComputerPage;
  let nbComputer: number;

  beforeEach(() => {
    page = new ComputerPage();
    browser.get('/computers');
  });

  it('Recherche le lien d\'ajout d\'un ordinateur et clique dessus', () => {
    element.all(by.css('.computer')).then(totalRows => {
      this.nbComputer = totalRows.length;
      element(by.css('#addComputerLink')).click();
      page.sleep();
      expect(browser.driver.getCurrentUrl()).toContain('/computer/ajout');
    });
  });

  it('Test le formulaire et vérifie et vérifie si l\'ajout de ton ordinateur a bien été ajouté', () => {
    browser.get('/computer/ajout');
    page.completeForm();
    page.sleep();
    let submitBtn = element.all(by.css('#submitBtn'));
    submitBtn.click().then(fn => {
      element.all(by.css('.computer')).then(totalNewRows => {
        this.nbComputer += 1;
        const compareComputer = this.nbComputer;
        expect(totalNewRows.length).toEqual(compareComputer);
        page.sleep();
      });
    });
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});