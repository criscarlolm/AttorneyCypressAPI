import { EndpointToken } from '../../types/tokenEndpoint';
import { AttorneyTestFeaturesControllerPayload } from '../../types/attorneyTestFeaturesController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/* attorney-test-features-controller Attorney Test Features Controller */

const getAttorneyTestFeaturesController = (
  getAttorneyTestFeaturesControllerResponse: AttorneyTestFeaturesControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAttorneyTestFeaturesControllerResponse: AttorneyTestFeaturesControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/test-features`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getAttorneyTestFeaturesControllerResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/******* Negative Testing - Attorney Subscription *********/

/* Unathorized Request */
const unathorizedTestFeaturesController = (): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
  }>
> => {
  const endPointValue = `/attorney/test-features`;
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
const invalidRequestTestFeaturesController = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/test-features`;
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
const invalidEndpointTestFeaturesController = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/test-features1`;
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

Cypress.Commands.add('getAttorneyTestFeaturesController', getAttorneyTestFeaturesController);
Cypress.Commands.add('unathorizedTestFeaturesController', unathorizedTestFeaturesController);
Cypress.Commands.add('invalidRequestTestFeaturesController', invalidRequestTestFeaturesController);
Cypress.Commands.add(
  'invalidEndpointTestFeaturesController',
  invalidEndpointTestFeaturesController,
);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Get Attorney Account Profile in the API.
       * @param {NotificationControllerPayload} getAttorneyTestFeaturesControllerResponse - The getAttorneyTestFeaturesControllerResponse information to get Attorney Test Features Controller
       * @param {unathorizedTestFeaturesController} unathorizedTestFeaturesController - The unathorizedTestFeaturesController no autorization login allowed negative test schema validation
       * @param {invalidRequestTestFeaturesController} invalidRequestTestFeaturesController - The invalidRequestTestFeaturesController method not allowed negative test schema validation
       * @param {invalidEndpointTestFeaturesController} invalidEndpointTestFeaturesController  - The invalidEndpointAttorneySubscriptions invalid endpoint URL negative test schema validation
       *
       *
       */
      getAttorneyTestFeaturesController: typeof getAttorneyTestFeaturesController;
      unathorizedTestFeaturesController: typeof unathorizedTestFeaturesController;
      invalidRequestTestFeaturesController: typeof invalidRequestTestFeaturesController;
      invalidEndpointTestFeaturesController: typeof invalidEndpointTestFeaturesController;
    }
  }
}

export {};
