/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

import { AttorneyControllerPayload } from '../../types/attorneyController';

import { generateAccountProfilePayload } from '../../support/utils/attorneyControllerData';

/** attorney-controller: Attorney Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/attorney-controller
 *
 */

describe('AUT-4123: LM Attorney API - Negative Testing Attorney Controller', () => {
  describe('GET - Account Profile', () => {
    it('TCM-6847: Account Profile - 401 Unauthorized (No Autorization)', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.unauthorizedAccountProfile(caseHeaders);
    });

    it('TCM-6847: Account Settings - 401 Unauthorized (No Autorization)', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.unauthorizedAccountSettings(caseHeaders);
    });

    it('TCM-6847: Response Templates - 401 Unauthorized (No Autorization)', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.unauthorizedResponseTemplates(caseHeaders);
    });

    it('TCM-6510 - POST Token-endpoint Attorney Login  successfully', () => {
      const attorneyLogin: EndpointPayload = generateEndpointPayload();
      const caseHeaders: EndpointHeaders = generateEndpointHeaders();
      cy.tokenEndpoint(attorneyLogin, caseHeaders);
    });

    it('TCM-6847 - 405 Method not Allowed', () => {
      const getAccountProfileResponse: AttorneyControllerPayload = generateAccountProfilePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestAccountProfile(getAccountProfileResponse, caseHeaders);
    });

    it('TCM-6847 - 404 Not Found', () => {
      const getAccountProfileResponse: AttorneyControllerPayload = generateAccountProfilePayload();
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidEndpointAccountProfile(getAccountProfileResponse, caseHeaders);
    });
  });
});

describe('AUT-4123: LM Attorney API - Negative Testing Attorney Controller', () => {
  describe('GET - Account Settings', () => {
    it('TCM-6847 - 405 Method not Allowed', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestAccountSettings(caseHeaders);
    });

    it('TCM-6847 - 404 Not Found', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidEndpointAccountSettings(caseHeaders);
    });
  });
});

describe('AUT-4123: LM Attorney API - Negative Testing Attorney Controller', () => {
  describe('GET - Response Templates', () => {
    it('TCM-6847 - 405 Method not Allowed', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidRequestResponseTemplates(caseHeaders);
    });

    it('TCM-6847 - 404 Not Found', () => {
      const caseHeaders: EndpointToken = generateEndpointToken();
      cy.invalidEndpointResponseTemplates(caseHeaders);
    });
  });
});
