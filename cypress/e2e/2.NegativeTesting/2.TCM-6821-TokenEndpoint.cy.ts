/// <reference types="cypress" />

import { EndpointPayload, EndpointHeaders } from '../../types/tokenEndpoint';
import {
  generateEmptyUsernamePayload,
  generateEmptyPasswordPayload,
  generateNoGrantTypePayload,
  generateEndpointPayload,
  generateEndpointHeaders,
} from 'cypress/support/utils/tokenEndpoint';

describe('AUT-4120: Negative Testing[Schema Validation Tests] token-endpoint', () => {
  it('TCM-6821 - 400 Bad Request Attorney Login (Empty Username)', () => {
    const attorneyLogin: EndpointPayload = generateEmptyUsernamePayload();
    const attorneyHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.invalidUsername(attorneyLogin, attorneyHeaders);
  });

  it('TCM-6821 - 401 Unauthorized Attorney Login (Empty Password)', () => {
    const attorneyLogin: EndpointPayload = generateEmptyPasswordPayload();
    const attorneyHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.invalidPassword(attorneyLogin, attorneyHeaders);
  });

  it('TCM-6821 - 400 Bad Request Attorney Login (No Grant Type Request Body Payload)', () => {
    const attorneyLogin: EndpointPayload = generateNoGrantTypePayload();
    const attorneyHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.noGrantType(attorneyLogin, attorneyHeaders);
  });

  it('TCM-6821 - 500 Internal Server Error Login (Empty Request Body Payload)', () => {
    const attorneyHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.emptyRequestBodyPayload(attorneyHeaders);
  });

  it('TCM-6821 - 404 Invalid URL Address EndPoint', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const attorneyHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.invalidUrlAddress(attorneyLogin, attorneyHeaders);
  });

  it('TCM-6821 - 405 Invalid Request Method', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const attorneyHeaders: EndpointHeaders = generateEndpointHeaders();
    cy.invalidRequestMethod(attorneyLogin, attorneyHeaders);
  });
});
