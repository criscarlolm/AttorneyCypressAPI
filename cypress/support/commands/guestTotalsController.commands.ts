import { EndpointToken } from '../../types/tokenEndpoint';
import { GuestTotalsControllerPayload } from '../../types/guestTotalsController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/* guest-totals-controller - Guest Totals Controller */

const getGuestTotalsController = (
  getGuestTotalsControllerResponse: GuestTotalsControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getGuestTotalsControllerResponse: GuestTotalsControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/guest-totals`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getGuestTotalsControllerResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/******* Negative Testing - Attorney Subscription *********/

/* Unathorized Request */
const unathorizedGuestTotalsController = (): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
  }>
> => {
  const endPointValue = `/attorney/guest-totals`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/* Invalid Request Method */
const invalidRequestGuestTotalsController = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/guest-totals`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* Invalid Endpoint Request */
const invalidEndpointGuestTotalsController = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/guest-totals1`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

Cypress.Commands.add('getGuestTotalsController', getGuestTotalsController);
Cypress.Commands.add('unathorizedGuestTotalsController', unathorizedGuestTotalsController);
Cypress.Commands.add('invalidRequestGuestTotalsController', invalidRequestGuestTotalsController);
Cypress.Commands.add('invalidEndpointGuestTotalsController', invalidEndpointGuestTotalsController);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Get Returns the totals for guest accounts in the API.
       * @param {GuestTotalsControllerPayload} getGuestTotalsControllerResponse - The getGuestTotalsControllerResponse information to get Returns the totals for guest accounts.
       * @param {unathorizedGuestTotalsController} unathorizedGuestTotalsController - The unathorizedGuestTotalsController no autorization login allowed negative test schema validation
       * @param {invalidRequestGuestTotalsController} invalidRequestGuestTotalsController - The invalidRequestGuestTotalsController method not allowed negative test schema validation
       * @param {invalidEndpointGuestTotalsController} invalidEndpointGuestTotalsController  - The invalidEndpointAttorneySubscriptions invalid endpoint URL negative test schema validation
       *
       *
       */
      getGuestTotalsController: typeof getGuestTotalsController;
      unathorizedGuestTotalsController: typeof unathorizedGuestTotalsController;
      invalidRequestGuestTotalsController: typeof invalidRequestGuestTotalsController;
      invalidEndpointGuestTotalsController: typeof invalidEndpointGuestTotalsController;
    }
  }
}

export {};
