/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders, EndpointToken } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
  generateEndpointToken,
} from 'cypress/support/utils/tokenEndpoint';

import { GuestTotalsControllerPayload } from '../../types/guestTotalsController';

import { generateGuestTotalsControllerPayload } from '../../support/utils/guestTotalsController';

/** guest-totals-controller - Guest Totals Controller API Swagger documents reference
 *  https://attorney-apitest.legalmatch.com/swagger-ui.html#/guest-totals-controller
 *
 */

describe('AUT-4095: LM Attorney API - Guest Totals Controller', () => {
  beforeEach('AUT-3929: LM Attorney API - Login and Case Response', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
  it('TCM-6773 - GET Get Returns the totals for guest accounts successfully', () => {
    const getGuestTotalsControllerResponse: GuestTotalsControllerPayload =
      generateGuestTotalsControllerPayload();
    const headers: EndpointToken = generateEndpointToken();
    cy.getGuestTotalsController(getGuestTotalsControllerResponse, headers);
  });
});
