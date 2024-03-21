import { EndpointPayload, EndpointHeaders } from '../../types/tokenEndpoint';

//Import Utility from support folder
import { AttorneyEnvironment } from '../utility';
//Call getBaseUrl() to get environment specific url value
const urlAttorney = new AttorneyEnvironment().getBaseUrl();

const endPoint = '/oauth/token';
const invalidEndPoint = '/oauth/tokenn';

/* Positive Testing Token Endpoint - /oauth/token postAccessToken */

const tokenEndpoint = (
  attorneyLogin: EndpointPayload,
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    attorneyLogin: EndpointPayload;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      headers: headers,
      body: attorneyLogin,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('access_token', response.body.access_token);
      cy.log(Cypress.env('access_token'));
    });
};

/* Negative Testing Token Endpoint - /oauth/token postAccessToken */

/* Invalid Username with empty value */
const invalidUsername = (
  attorneyLogin: EndpointPayload,
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    attorneyLogin: EndpointPayload;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: headers,
      body: attorneyLogin,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('invalid_grant');
    });
};

/* Invalid Password with empty value */
const invalidPassword = (
  attorneyLogin: EndpointPayload,
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    attorneyLogin: EndpointPayload;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: headers,
      body: attorneyLogin,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('invalid_grant');
    });
};

/* No Grant Type Request Body Payload */
const noGrantType = (
  attorneyLogin: EndpointPayload,
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    attorneyLogin: EndpointPayload;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: headers,
      body: attorneyLogin,
    })
    .then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq('invalid_request');
    });
};

/* Empty Request Body Payload */
const emptyRequestBodyPayload = (
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: headers,
    })
    .then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body.error).to.eq('Internal Server Error');
      expect(response.body.exception).to.eq('com.fasterxml.jackson.databind.JsonMappingException');
    });
};

/* Invalid URL Adddress */
const invalidUrlAddress = (
  attorneyLogin: EndpointPayload,
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    attorneyLogin: EndpointPayload;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlAttorney + `${invalidEndPoint}`,
      failOnStatusCode: false,
      headers: headers,
      body: attorneyLogin,
    })
    .then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.error).to.eq('Not Found');
      expect(response.body.message).to.eq('No message available');
    });
};

/* Invalid Request Method */
const invalidRequestMethod = (
  attorneyLogin: EndpointPayload,
  headers: EndpointHeaders,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    attorneyLogin: EndpointPayload;
    headers: EndpointHeaders;
  }>
> => {
  return cy
    .request({
      method: 'GET',
      url: urlAttorney + `${endPoint}`,
      failOnStatusCode: false,
      headers: headers,
      body: attorneyLogin,
    })
    .then((response) => {
      expect(response.status).to.eq(405);
      expect(response.body.error).to.eq('method_not_allowed');
      expect(response.body.error_description).to.eq('Request method &#39;GET&#39; not supported');
    });
};

Cypress.Commands.add('tokenEndpoint', tokenEndpoint);
Cypress.Commands.add('invalidUsername', invalidUsername);
Cypress.Commands.add('invalidPassword', invalidPassword);
Cypress.Commands.add('noGrantType', noGrantType);
Cypress.Commands.add('emptyRequestBodyPayload', emptyRequestBodyPayload);
Cypress.Commands.add('invalidUrlAddress', invalidUrlAddress);
Cypress.Commands.add('invalidRequestMethod', invalidRequestMethod);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Create a new Legal Case in the API.
       * @param {tokenEndpoint} tokenEndpoint - The tokenEndpoint information to successfull attorney login
       * @param {AttorneyLoginPayload} invalidUsername - The tokenEndpoint information to attorney login
       * @param {AttorneyLoginPayload} invalidPassword - The tokenEndpoint information to attorney login
       * @param {AttorneyLoginPayload} noGrantType - The tokenEndpoint information to attorney login
       * @param {AttorneyLoginPayload} emptyRequestBodyPayload - The tokenEndpoint information to attorney login
       * @param {AttorneyLoginPayload} invalidUrlAddress - The tokenEndpoint information to attorney login
       * @param {AttorneyLoginPayload} invalidRequestMethod - The tokenEndpoint information to attorney login
       *
       */
      tokenEndpoint: typeof tokenEndpoint;
      invalidUsername: typeof invalidUsername;
      invalidPassword: typeof invalidPassword;
      noGrantType: typeof noGrantType;
      emptyRequestBodyPayload: typeof emptyRequestBodyPayload;
      invalidUrlAddress: typeof invalidUrlAddress;
      invalidRequestMethod: typeof invalidRequestMethod;
    }
  }
}

export {};
