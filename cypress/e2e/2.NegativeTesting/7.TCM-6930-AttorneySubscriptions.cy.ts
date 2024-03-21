/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

/** attorney-subscriptions-controller: Attorney Subscriptions Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/attorney-subscriptions-controller
 *
 */
describe('AUT-4158: Attorney Subscription Controller - Negative Testing', () => {
  it('TCM-6930 - 401 Unauthorized (No Autorization)', () => {
    cy.unautorizedRequestAttorneySubscriptions();
  });

  it('TCM-6510 - Token-endpoint Attorney Login  successfully', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const caseHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, caseHeaders);
  });

  it('TCM-6930 - 405 Invalid Request Method', () => {
    const headers: EndpointToken = generateEndpointToken();
    cy.invalidRequestAttorneySubscriptions(headers);
  });

  it('TCM-6930 - 404 Invalid Endpoint Request', () => {
    const headers: EndpointToken = generateEndpointToken();
    cy.invalidEndpointAttorneySubscriptions(headers);
  });
});
