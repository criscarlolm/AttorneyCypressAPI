import { EndpointPayload, EndpointHeaders, EndpointToken } from 'cypress/types/tokenEndpoint';

export const generateEndpointHeaders = (): EndpointHeaders => {
  const authorization = `Basic ${Cypress.env('Authorization')}`;
  return {
    Authorization: authorization,
    'Content-Type': 'application/json;charset=utf-8',
    Accept: 'application/json, text/plain, */*',
    'User-Agent': Cypress.env('User-Agent'),
    'x-app-version': Cypress.env('x-app-version'),
  };
};

export const generateEndpointPayload = (): EndpointPayload => {
  return {
    username: Cypress.env('username'),
    password: Cypress.env('password'),
    grant_type: Cypress.env('grant_type'),
  };
};

export const generateEndpointToken = (): EndpointToken => {
  const accessToken = Cypress.env('access_token');
  return {
    Authorization: `bearer ${accessToken}`,
    Accept: 'application/json, text/plain, */*',
  };
};

export const generateEmptyUsernamePayload = (): EndpointPayload => {
  return {
    username: '',
    password: Cypress.env('password'),
    grant_type: Cypress.env('grant_type'),
  };
};

export const generateEmptyPasswordPayload = (): EndpointPayload => {
  return {
    username: Cypress.env('username'),
    password: '',
    grant_type: Cypress.env('grant_type'),
  };
};

export const generateNoGrantTypePayload = (): EndpointPayload => {
  return {
    username: Cypress.env('username'),
    password: Cypress.env('password'),
  };
};

export const generateEmptyRequestBodyPayload = (): EndpointPayload => {
  return {};
};
