import {
  InsertCasePayload,
  InsertCaseHeadersPayload,
  MatchCasePayload,
  MatchCaseHeadersPayload,
} from '../../types/casePostingModule';

//Import Utility from support folder
import { CCPMEnvironment } from '../utility';

//Call getBaseUrl() to get environment specific url value
const urlCCPM = new CCPMEnvironment().getBaseUrl();

/************ Positive Testing - Schema Validation *************************/

const insertLegalCase = (
  insertCase: InsertCasePayload,
  headers: InsertCaseHeadersPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    insertCase: InsertCasePayload;
    headers: InsertCaseHeadersPayload;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlCCPM,
      headers: headers,
      body: insertCase,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('caseNumber', response.body.data.insertLegalCase.legalCase.caseNumber);
      Cypress.env('token', response.body.data.insertLegalCase.authToken);
      return response;
    });
};

const matchLegalCase = (
  matchCase: MatchCasePayload,
  headers: MatchCaseHeadersPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    matchCase: MatchCasePayload;
    headers: MatchCaseHeadersPayload;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlCCPM,
      headers: headers,
      body: matchCase,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body.data);
    });
};

/************ Negative Testing - Schema Validation *************************/

/* POST Method: InsertCase - Bad Request (Empty Body Payload Request) */

const emptyBodyRequestInsertLegalCase = (
  headers: InsertCaseHeadersPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    headers: InsertCaseHeadersPayload;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlCCPM,
      failOnStatusCode: false,
      headers: headers,
      body: '',
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* POST Method: InsertCase - Unauthorized (No Headers Request Method) */

const unauthorizedInsertLegalCase = (
  insertCase: InsertCasePayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    insertCase: InsertCasePayload;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlCCPM,
      failOnStatusCode: false,
      body: insertCase,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/* POST Method: InsertCase - Forbidden (Invalid Request Method) */

const forbiddenInsertLegalCase = (
  insertCase: InsertCasePayload,
  headers: InsertCaseHeadersPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    insertCase: InsertCasePayload;
    headers: InsertCaseHeadersPayload;
  }>
> => {
  return cy
    .request({
      method: 'PATCH',
      url: urlCCPM,
      failOnStatusCode: false,
      headers: headers,
      body: insertCase,
    })
    .then((response) => {
      expect(response.status).to.eq(403);
    });
};

/* POST Method: MatchedCase - Bad Request (Empty Body Payload Request) */

const emptyBodyRequestMatchLegalCase = (
  headers: MatchCaseHeadersPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    headers: MatchCaseHeadersPayload;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlCCPM,
      failOnStatusCode: false,
      headers: headers,
      body: '',
    })
    .then((response) => {
      expect(response.status).to.eq(400);
    });
};

/* POST Method: MatchedCase - Unauthorized (No Headers Request Method) */

const unauthorizedMatchLegalCase = (
  matchCase: MatchCasePayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    matchCase: MatchCasePayload;
  }>
> => {
  return cy
    .request({
      method: 'POST',
      url: urlCCPM,
      failOnStatusCode: false,
      body: matchCase,
    })
    .then((response) => {
      expect(response.status).to.eq(401);
    });
};

/* POST Method: MatchedCase - Forbidden (Invalid Request Method) */

const forbiddenMatchLegalCase = (
  matchCase: MatchCasePayload,
  headers: MatchCaseHeadersPayload,
): Cypress.Chainable<
  Cypress.Response<{
    [x: string]: any;
    matchCase: MatchCasePayload;
    headers: MatchCaseHeadersPayload;
  }>
> => {
  return cy
    .request({
      method: 'PATCH',
      url: urlCCPM,
      failOnStatusCode: false,
      headers: headers,
      body: matchCase,
    })
    .then((response) => {
      expect(response.status).to.eq(403);
    });
};

Cypress.Commands.add('insertLegalCase', insertLegalCase);
Cypress.Commands.add('matchLegalCase', matchLegalCase);
Cypress.Commands.add('emptyBodyRequestInsertLegalCase', emptyBodyRequestInsertLegalCase);
Cypress.Commands.add('unauthorizedInsertLegalCase', unauthorizedInsertLegalCase);
Cypress.Commands.add('forbiddenInsertLegalCase', forbiddenInsertLegalCase);
Cypress.Commands.add('emptyBodyRequestMatchLegalCase', emptyBodyRequestMatchLegalCase);
Cypress.Commands.add('unauthorizedMatchLegalCase', unauthorizedMatchLegalCase);
Cypress.Commands.add('forbiddenMatchLegalCase', forbiddenMatchLegalCase);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * @description Create a new Legal Case in the API.
       * @param {InsertCasePayload} insertCase - The insertLegalCase information to create.
       * @param {MatchCasePayload} matchCase - The insertLegalCase information to create.
       * @param {emptyBodyRequestInsertLegalCase} emptyBodyRequestInsertLegalCase - The emptyBodyRequestInsertLegalCase empty body payload request negative test schema validation
       * @param {unauthorizedInsertLegalCase} unauthorizedInsertLegalCase - The unauthorizedInsertLegalCase no headers Unauthorized negative test schema validation
       * @param {forbiddenInsertLegalCase} forbiddenInsertLegalCase - The forbiddenInsertLegalCase invalid request negative test schema validation
       * @param {emptyBodyRequestMatchLegalCase} emptyBodyRequestMatchLegalCase - The emptyBodyRequestMatchLegalCase empty body payload request negative test schema validation
       * @param {unauthorizedMatchLegalCase} unauthorizedMatchLegalCase - The unauthorizedMatchLegalCase no headers Unauthorized negative test schema validation
       * @param {forbiddenMatchLegalCase} forbiddenMatchLegalCase - The forbiddenMatchLegalCase invalid request negative test schema validation
       *
       */
      insertLegalCase: typeof insertLegalCase;
      matchLegalCase: typeof matchLegalCase;
      emptyBodyRequestInsertLegalCase: typeof emptyBodyRequestInsertLegalCase;
      unauthorizedInsertLegalCase: typeof unauthorizedInsertLegalCase;
      forbiddenInsertLegalCase: typeof forbiddenInsertLegalCase;
      emptyBodyRequestMatchLegalCase: typeof emptyBodyRequestMatchLegalCase;
      unauthorizedMatchLegalCase: typeof unauthorizedMatchLegalCase;
      forbiddenMatchLegalCase: typeof forbiddenMatchLegalCase;
    }
  }
}

export {};
