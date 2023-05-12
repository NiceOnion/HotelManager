// This file is required by karma.conf.js and loads recursively all the .spec and framework files

// Load required polyfills for testing
import 'zone.js/dist/zone-testing';
import 'zone.js/dist/zone';

// Import all of your tests
import './spec/account.service.spec';
import './spec/base-urlservice.service.spec';
import './spec/account-list.component.spec';
import './spec/account-details.component.spec';
// ...and so on

// Set up the test bed environment
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);
