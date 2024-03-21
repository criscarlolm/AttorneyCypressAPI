/// <reference types="cypress" />
import { EndpointPayload, EndpointHeaders } from '../../types/tokenEndpoint';
import {
  generateEndpointPayload,
  generateEndpointHeaders,
} from 'cypress/support/utils/tokenEndpoint';

describe('AUT-3929: LM Attorney API', () => {
  it('TCM-6510 - Token-endpoint Attorney Login  scuccessfully', () => {
    const attorneyLogin: EndpointPayload = generateEndpointPayload();
    const headers: EndpointHeaders = generateEndpointHeaders();
    cy.tokenEndpoint(attorneyLogin, headers);
  });
});
