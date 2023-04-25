// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// Load required polyfills for testing
import 'zone.js/dist/zone-testing';
import 'zone.js/dist/zone';

// Import all of your tests
import './app/Services/account.service.spec';
import './app/Services/base-urlservice.service.spec';
import './app/account-list/account-list.component.spec';
import './app/account-details/account-details.component.spec';
// ...and so on

// Set up the test bed environment
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
