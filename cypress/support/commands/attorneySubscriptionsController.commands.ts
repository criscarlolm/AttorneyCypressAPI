import { EndpointToken } from '../../types/tokenEndpoint';
import { AttorneySubscriptionsControllerPayload } from '../../types/attorneySubscriptionsController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/* attorney-subscriptions-controller - /attorney/subscriptions Returns the list of subscriptions an attorney has subscribed.*/

/******* Positive Testing - Attorney Subscription *********/

const getAttorneySubscriptionsController = (
  getAttorneySubscriptionsControllerResponse: AttorneySubscriptionsControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAttorneySubscriptionsControllerResponse: AttorneySubscriptionsControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/subscriptions`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getAttorneySubscriptionsControllerResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/******* Negative Testing - Attorney Subscription *********/

/* Unathorized Request */
const unautorizedRequestAttorneySubscriptions = (): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAttorneySubscriptionsControllerResponse: AttorneySubscriptionsControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/subscriptions`;
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
const invalidRequestAttorneySubscriptions = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/subscriptions`;
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
const invalidEndpointAttorneySubscriptions = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/subscriptions1`;
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

Cypress.Commands.add('getAttorneySubscriptionsController', getAttorneySubscriptionsController);
Cypress.Commands.add(
  'unautorizedRequestAttorneySubscriptions',
  unautorizedRequestAttorneySubscriptions,
);
Cypress.Commands.add('invalidRequestAttorneySubscriptions', invalidRequestAttorneySubscriptions);
Cypress.Commands.add('invalidEndpointAttorneySubscriptions', invalidEndpointAttorneySubscriptions);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Get Attorney Account Profile in the API.
       * @param {AttorneySubscriptionsControllerPayload} getAttorneySubscriptionsController - The getAttorneySubscriptionsController Returns the list of subscriptions an attorney has subscribed.
       * @param {unautorizedRequestAttorneySubscriptions} unautorizedRequestAttorneySubscriptions - The unautorizedRequestAttorneySubscriptions no autorization login allowed negative test schema validation
       * @param {invalidRequestAttorneySubscriptions} invalidRequestAttorneySubscriptions - The invalidRequestAttorneySubscriptions method not allowed negative test schema validation
       * @param {invalidEndpointAttorneySubscriptions} invalidEndpointAttorneySubscriptions  - The invalidEndpointAttorneySubscriptions invalid endpoint URL negative test schema validation
       *
       *
       */
      getAttorneySubscriptionsController: typeof getAttorneySubscriptionsController;
      unautorizedRequestAttorneySubscriptions: typeof unautorizedRequestAttorneySubscriptions;
      invalidRequestAttorneySubscriptions: typeof invalidRequestAttorneySubscriptions;
      invalidEndpointAttorneySubscriptions: typeof invalidEndpointAttorneySubscriptions;
    }
  }
}

export {};
