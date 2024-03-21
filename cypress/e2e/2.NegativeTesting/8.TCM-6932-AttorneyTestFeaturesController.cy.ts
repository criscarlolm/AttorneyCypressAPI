/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

/** attorney-test-features-controller - Attorney Test Features Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/attorney-test-features-controller
 *
 */

describe('Attorney Test Features Controller - Negative Testing', () => {
  it('TCM-6932 - 401 Unauthorized (No Autorization)', () => {
    cy.unathorizedTestFeaturesController();
  });

  it('TCM-6510 - Token-endpoint Attorney Login  successfully', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const caseHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, caseHeaders);
  });

  it('TCM-6932 - 405 Invalid Request Method', () => {
    const headers: EndpointToken = generateEndpointToken();
    cy.invalidRequestTestFeaturesController(headers);
  });

  it('TCM-6932 - 404 Invalid Endpoint Request', () => {
    const headers: EndpointToken = generateEndpointToken();
    cy.invalidEndpointTestFeaturesController(headers);
  });
});
