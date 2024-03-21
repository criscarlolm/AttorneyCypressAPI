/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

import { AttorneyTestFeaturesControllerPayload } from '../../types/attorneyTestFeaturesController';

import { generateAttorneyTestFeaturesControllerPayload } from '../../support/utils/attorneyTestFeaturesController';

/** attorney-test-features-controller - Attorney Test Features Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/attorney-test-features-controller
 *
 */

describe('Attorney Test Features Controller', () => {
  beforeEach('AUT-3929: LM Attorney API - Login and Case Response', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
  it('TCM-6772 - GET Get Attorney Test Features Controller successfully', () => {
    const getAttorneyTestFeaturesControllerResponse: AttorneyTestFeaturesControllerPayload =
      generateAttorneyTestFeaturesControllerPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getAttorneyTestFeaturesController(getAttorneyTestFeaturesControllerResponse, headers);
  });
});
