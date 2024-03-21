/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

import { AttorneySubscriptionsControllerPayload } from '../../types/attorneySubscriptionsController';

import { generateAttorneySubscriptionsControllerPayload } from '../../support/utils/attorneySubscriptionsController';

/** attorney-subscriptions-controller: Attorney Subscriptions Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/attorney-subscriptions-controller
 *
 */
describe('Attorney Subscription Controller', () => {
  beforeEach('AUT-3929: LM Attorney API - Login and Case Response', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
  it('TCM-6767 - GET Get Returns the list of subscriptions an attorney has subscribed successfully', () => {
    const getAttorneySubscriptionsControllerResponse: AttorneySubscriptionsControllerPayload =
      generateAttorneySubscriptionsControllerPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getAttorneySubscriptionsController(getAttorneySubscriptionsControllerResponse, headers);
  });
});
