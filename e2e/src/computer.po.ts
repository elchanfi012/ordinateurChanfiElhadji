import { browser, by, element } from 'protractor';

export class ComputerPage {

  sleep() {
    browser.driver.sleep(5000);
  }
  completeForm() {
    let modelde = element.all(by.id('modele'));
    let marque = element.all(by.css('.marque'));
    let type = element.all(by.id('type'));
    let categorie = element.all(by.css('.categorie'));
    let prixAchat = element.all(by.id('prixAchat'));
    let prixVente = element.all(by.id('prixVente'));
    modelde.sendKeys('VivoBook S15 S510UF');
    marque.get(3).click();
    type.sendKeys('fixe');
    categorie.get(0).click();
    prixAchat.sendKeys(220.54);
    prixVente.sendKeys(551.87);
  }
}