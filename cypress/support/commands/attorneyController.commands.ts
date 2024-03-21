import { EndpointToken } from '../../types/tokenEndpoint';
import { AttorneyControllerPayload } from '../../types/attorneyController';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

/***************** Positive Testing - Attorney Controller ******************/

const getAccountProfile = (
  getAccountProfileResponse: AttorneyControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAccountProfileResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-profile`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getAccountProfileResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const getAccountSettings = (
  getAccountSettingsResponse: AttorneyControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAccountSettingsResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-settings`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getAccountSettingsResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

const getResponseTemplates = (
  getResponseTemplatesResponse: AttorneyControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getResponseTemplatesResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/response-templates`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      headers: caseHeaders,
      body: getResponseTemplatesResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
};

/************ Negative Testing - Schema Validation *************************/

/* GET Method: Account Profile - Unauthorized (No Authorization) */
const unauthorizedAccountProfile = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-profile`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/* GET Method: Account Profile - Invalid Request Method) */

const invalidRequestAccountProfile = (
  getAccountProfileResponse: AttorneyControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAccountProfileResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-profile`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getAccountProfileResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
    });
};

/* GET Method: Account Profile - Invalid Endpoint Request) */

const invalidEndpointAccountProfile = (
  getAccountProfileResponse: AttorneyControllerPayload,
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAccountProfileResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-profile1`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
      body: getAccountProfileResponse,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

/* GET Method: Account Settings - Unauthorized (No Authorization) */
const unauthorizedAccountSettings = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAccountSettingsResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-settings`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/* GET Method: Account Settings - Invalid Request Method) */
const invalidRequestAccountSettings = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-settings`;
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

/* GET Method: Account Settings - Invalid Endpoint Request) */
const invalidEndpointAccountSettings = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    getAccountSettingsResponse: AttorneyControllerPayload;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/account-settings1`;
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

/* GET Method: Account Settings - Unauthorized (No Authorization) */
const unauthorizedResponseTemplates = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/response-templates`;
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/* GET Method: Response Templates - Invalid Request Method) */
const invalidRequestResponseTemplates = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/response-templates`;
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

/* GET Method: Response Templates - Invalid Endpoint Request) */
const invalidEndpointResponseTemplates = (
  caseHeaders: EndpointToken,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    caseHeaders: EndpointToken;
  }>
> => {
  const endPointValue = `/attorney/response-templates1`;
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPointValue}`,
      failOnStatusCode: false,
      headers: caseHeaders,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
    });
};

Cypress.Commands.add('getAccountProfile', getAccountProfile);
Cypress.Commands.add('getAccountSettings', getAccountSettings);
Cypress.Commands.add('getResponseTemplates', getResponseTemplates);
Cypress.Commands.add('unauthorizedAccountProfile', unauthorizedAccountProfile);
Cypress.Commands.add('invalidRequestAccountProfile', invalidRequestAccountProfile);
Cypress.Commands.add('invalidEndpointAccountProfile', invalidEndpointAccountProfile);
Cypress.Commands.add('unauthorizedAccountSettings', unauthorizedAccountSettings);
Cypress.Commands.add('invalidRequestAccountSettings', invalidRequestAccountSettings);
Cypress.Commands.add('invalidEndpointAccountSettings', invalidEndpointAccountSettings);
Cypress.Commands.add('unauthorizedResponseTemplates', unauthorizedResponseTemplates);
Cypress.Commands.add('invalidRequestResponseTemplates', invalidRequestResponseTemplates);
Cypress.Commands.add('invalidEndpointResponseTemplates', invalidEndpointResponseTemplates);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Get Attorney Account Profile in the API.
       * @param {AttorneyControllerPayload} getAccountProfileResponse - The getAccountProfileResponse information to get Account Profile
       * @param {AttorneyControllerPayload} getAccountSettingsResponse - The getAccountSettingsResponse information to get Account Settings
       * @param {AttorneyControllerPayload} getResponseTemplatesResponse - The getAccountSettingsResponse information to get Response Templates
       * @param {unauthorizedAccountProfile} unauthorizedAccountProfile - The unauthorizedAccountProfile no autorization token negative test schema validation
       * @param {invalidRequestAccountProfile} invalidRequestAccountProfile - The invalidRequestAccountProfile method not allowed negative test schema validation
       * @param {invalidEndpointAccountProfile} invalidEndpointAccountProfile - The invalidEndpointAccountProfile error not found negative test schema validation
       * @param {unauthorizedAccountSettings} unauthorizedAccountSettings - The unauthorizedAccountSettings no autorization token negative test schema validation
       * @param {invalidRequestAccountSettings} invalidRequestAccountSettings - The invalidRequestAccountSettings method not allowed negative test schema validation
       * @param {invalidEndpointAccountSettings} invalidEndpointAccountSettings - The invalidEndpointAccountSettings error not found negative test schema validation
       * @param {unauthorizedResponseTemplates} unauthorizedResponseTemplates - The unauthorizedResponseTemplates no autorization token negative test schema validation
       * @param {invalidRequestResponseTemplates} invalidRequestResponseTemplates - The invalidRequestResponseTemplates method not allowed negative test schema validation
       * @param {invalidEndpointResponseTemplates} invalidEndpointResponseTemplates - The invalidEndpointResponseTemplates error not found negative test schema validation
       *
       */

      getAccountProfile: typeof getAccountProfile;
      getAccountSettings: typeof getAccountSettings;
      getResponseTemplates: typeof getResponseTemplates;
      unauthorizedAccountProfile: typeof unauthorizedAccountProfile;
      invalidRequestAccountProfile: typeof invalidRequestAccountProfile;
      invalidEndpointAccountProfile: typeof invalidEndpointAccountProfile;
      unauthorizedAccountSettings: typeof unauthorizedAccountSettings;
      invalidRequestAccountSettings: typeof invalidRequestAccountSettings;
      invalidEndpointAccountSettings: typeof invalidEndpointAccountSettings;
      unauthorizedResponseTemplates: typeof unauthorizedResponseTemplates;
      invalidRequestResponseTemplates: typeof invalidRequestResponseTemplates;
      invalidEndpointResponseTemplates: typeof invalidEndpointResponseTemplates;
    }
  }
}

export {};
