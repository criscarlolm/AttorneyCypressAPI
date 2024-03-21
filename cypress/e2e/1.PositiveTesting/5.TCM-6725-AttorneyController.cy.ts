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

describe('AUT-3600: LM Attorney API - Attorney Controller', () => {
  beforeEach('AUT-3929: LM Attorney API - Login and Case Response', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
  it('TCM-6725 - GET Get Account Profile successfully', () => {
    const getAccountProfileResponse: AttorneyControllerPayload = generateAccountProfilePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getAccountProfile(getAccountProfileResponse, headers);
  });

  it('TCM-6725 - GET Get Account Settings successfully', () => {
    const getAccountProfileResponse: AttorneyControllerPayload = generateAccountProfilePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getAccountSettings(getAccountProfileResponse, headers);
  });

  it('TCM-6725 - GET Get Response Template successfully', () => {
    const getAccountProfileResponse: AttorneyControllerPayload = generateAccountProfilePayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getResponseTemplates(getAccountProfileResponse, headers);
  });
});
