/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

/** guest-totals-controller - Guest Totals Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/guest-totals-controller
 *
 */

describe('AUT-4160: Guest Totals Controller - Negative Testing', () => {
  it('TCM-6934 - 401 Unauthorized (No Autorization)', () => {
    cy.unathorizedGuestTotalsController();
  });

  it('TCM-6510 - Token-endpoint Attorney Login  successfully', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const caseHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, caseHeaders);
  });

  it('TCM-6934 - 405 Invalid Request Method', () => {
    const headers: EndpointToken = generateEndpointToken();
    cy.invalidRequestGuestTotalsController(headers);
  });

  it('TCM-6934 - 404 Invalid Endpoint Request', () => {
    const headers: EndpointToken = generateEndpointToken();
    cy.invalidEndpointGuestTotalsController(headers);
  });
});
