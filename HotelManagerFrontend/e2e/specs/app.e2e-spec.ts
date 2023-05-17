import {AppComponent} from "../../src/app.component";
import { browser, logging } from 'protractor';

describe('AppComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the title', () => {
        expect(browser.getTitle()).toEqual(jasmine.stringMatching('My Angular App'));
    });

    afterEach(async () => {
        // Assert that there are no errors in the browser console
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        }));
    });
});
