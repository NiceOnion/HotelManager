import {AppComponent} from "../../src/app.component";
import { browser, logging } from 'protractor';

describe('AppComponent', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should display the title', () => {
        expect(browser.getTitle()).toEqual(jasmine.stringMatching('Angular Getting Started'));
    });

    afterEach(async () => {
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        // Exclude the favicon.ico error from the expectations
        const filteredLogs = logs.filter(log => !log.message.includes('favicon.ico'));
        expect(filteredLogs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE
        }));
    });

});
